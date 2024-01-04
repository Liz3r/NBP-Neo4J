const express = require('express');
const neo4j = require('neo4j-driver');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');



const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '7946138520'));
const session = driver.session();

app.get('/', async (req,res) => {
    //const result = await session.run('CREATE (a:Person {name: "proba"}) RETURN a');
    //console.log(result.records[0]);
})

app.post('/register/:username/:email/:password', async (req, res) =>{
    const username = req.params.username;
    const email = req.params.email;
    const password = req.params.password;
    var passwordHash;

    await bcrypt.genSalt(10).then(salt => {
        return bcrypt.hash(password, salt);
    }).then( hash => {
        passwordHash = hash;
        
    }).catch(err => {
        console.log(err);
    });


    const result = await session.run(`match (u:User {email: '${email}'}) return u;`);
    
    if(result.records.length === 0){
        console.log(result.records.length);
        const createResult = await session.run(`create (u:User {username: '${username}', email: '${email}', password: '${passwordHash}'}) return u;`);
        if(createResult.records.length !== 0){
            const props = createResult.records[0].get(0).properties;
            res.status(200).send({message: "User registred"});
        }
    }else{
        res.status(409).send({message: "User already exists"});
    }
})

app.get('/login/:email/:password', async (req,res) => {
    const email = req.params.email;
    const password = req.params.password;

    const result = await session.run(`match (u:User {email: '${email}'}) return u;`);

    if(result.records.length === 0){
        res.status(404).send({message: "Email not found"});
        return;
    }
    const props = result.records[0].get(0).properties;

    bcrypt.compare(password, props.password, (err, result) =>{
        if(result === true){
            const token = jwt.sign({username: props.username}, 'secret-key', {
                expiresIn: '1h'
            })
            console.log(props.username);
            res.cookie('jwt',token);
            res.status(200).send({username: props.username, email: props.email});
        }else{
            res.status(401).send({message: "Wrong password"});
        }
    });
    

})

app.get('/proba', verifyToken, (req,res) =>{
    //
    console.log(req.username);
    res.send({username: req.username});
})


function verifyToken(req, res, next) {

    const token = req.cookies['jwt'];

    if (!token) return res.status(401).send({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.username = decoded.username;
        next();
    }catch (error) {
        res.status(401).send({ error: 'Invalid token' });
    }
};

app.listen(port,() => {
    console.log("Listening on " + port);
})