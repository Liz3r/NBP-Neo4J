const express = require('express');
const neo4j = require('neo4j-driver');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');



const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '7946138520'));


app.get('/', async (req,res) => {
    //const result = await session.run('CREATE (a:Person {name: "proba"}) RETURN a');
    //console.log(result.records[0]);
})


app.post('/register/:username/:email/:password', async (req, res) =>{
    const username = req.params.username;
    const email = req.params.email;
    const password = req.params.password;
    var passwordHash;

    const session = driver.session();

    await bcrypt.genSalt(10).then(salt => {
        return bcrypt.hash(password, salt);
    }).then( hash => {
        passwordHash = hash;
        
    }).catch(err => {
        console.log(err);
    });


    const result = await session.run(`match (u:User {email: '${email}'}) return u;`);
    session.close();
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
    const session = driver.session();

    const result = await session.run(`match (u:User {email: '${email}'}) return u;`);
    session.close();
    if(result.records.length === 0){
        res.status(404).send({message: "Email not found"});
        return;
    }
    const props = result.records[0].get(0).properties;
    const userId = result.records[0].get(0).elementId;
    console.log(userId);

    bcrypt.compare(password, props.password, (err, result) =>{
        if(result === true){
            const token = jwt.sign({userId: userId}, 'secret-key');
            res.cookie('jwt',token);
            res.status(200).send({username: props.username, email: props.email});
        }else{
            res.status(401).send({message: "Wrong password"});
        }
    });
    

})

// app.get('/proba', verifyToken, async (req,res)=>{

//     const id = req.userId;
//     const result = await session.run('match (u) where elementId(u)="'+id+'" return u;');
//     console.log(result.records[0].get(0));
    
// })

app.get("/getMovieDetails/:id", verifyToken, async (req,res) =>{
    const movieId = req.params.id;
    const userId = req.userId;

    //return data
    var ratingRelationExists;
    var rating;

    const session = driver.session();

    //match (m:Movie) where elementId(m)='${movieId}' match (u:User) where elementId(u)='${userId}' return m,u;
    const userExistsResult = await session.run(`return exists{match (u:User) where elementId(u)="${userId}"};`);
    if(userExistsResult.records){
        res.status(500).send({message: 'Server error'});
        return;
    }
    const userExists = userExistsResult.records[0].get(0);
    if(!userExists){
        res.status(404).send({message: 'User not found'});
        return;
    }

    const movieExistsResult = await session.run(`return exists{match (m:Movie) where elementId(m)="${movieId}"};`);
    if(movieExistsResult.records){
        res.status(500).send({message: 'Server error'});
        return;
    }
    const movieExists = movieExistsResult.records[0].get(0);
    if(!movieExists){
        res.status(404).send({message: 'Movie not found'});
        return;
    }

    const relationTypeExistsResult = await session.run(`return exists{ ()-[r:RATED]->()};`);
    
    if(relationTypeExistsResult.records){
        res.status(500).send({message: 'Server error'});
        return;
    }
    const relationTypeExists = relationTypeExistsResult.records[0].get(0);
    if(!relationTypeExists){
        ratingRelationExists = false;
    }else{
        const relatonResult = await session.run(`
        match (m:Movie) where elementId(m)='${movieId}' 
        match (u:User) where elementId(u)='${userId}' 
        optional match (u)-[r:RATED]->(m) return r;`);

        //const relation = relatonExistsResult.records[0].get(0);
    }




    //const userRatedMovieRelationExistsResult = await session.run(`match (m:Movie) where elementId(m)='${movieId}' match (u:User) where elementId(u)='${userId}' return exists((u)-[:Rated]->(m));`);
    //dodaje novi rating: match (m:Movie) where elementId(m)='${movieId}' match (u:User) where elementId(u)='${userId}' merge (u)-[r:Rated {rating: ...}]->(m) return u,r,m;

    session.close();
})

app.get("/getMoviesBySearch/:search", verifyToken, async (req,res)=>{
    const search = req.params.search;

    const session = driver.session();
    const query = `match (m:Movie) where toLower(m.title) contains toLower('${search}') return m;`;

    const result = await session.run(query);
    session.close();

    var moviesList = [];
    result.records.forEach(record => {
        const movie = {
            id: result.records[0].get(0).elementId,
            title: record.get(0).properties.title,
            year: record.get(0).properties.year,
            genre: record.get(0).properties.genre,
            rating: record.get(0).properties.rating,
            imgSource: record.get(0).properties.imgSource
        }
        moviesList.push(movie);
    });

    res.status(200).send(moviesList);

})

app.get("/getMovieDetails/:title", verifyToken, (req,res)=>{
    
})

app.get("/getMoviesByActor/:actor", verifyToken, (req,res)=>{

})

app.get("/getMoviesByDirector/:director", verifyToken, (req,res)=>{

})

app.get("/getRecommendedMovies", verifyToken, (req,res) => {

})

app.post("/addMovie", verifyToken, async (req,res)=>{
    console.log(req.body);

    // merge (d:director {name: "Masaki Kobayashi"}) merge (a1:actor {name:"Toshiro Mifune"}) merge (a2:actor {name:"Yoko Tsukasa"}) merge (a3:actor {name:"Go Kato"}) merge (d)-[:directed]->(m)-[:directed_by]->(d) merge (a1)-[:acted_in]->(m)-[:has_actor]->(a1) merge (a2)-[:acted_in]->(m)-[:has_actor]->(a2) merge (a3)-[:acted_in]->(m)-[:has_actor]->(a3) return m,d,a1,a2,a3;
    var title, year, genre, rating, imgSource, description, director, actors;
    var actorsList;

    if( req.body.title && req.body.title != '' &&
        req.body.year && req.body.year != '' &&
        req.body.genre && req.body.genre != '' &&
        req.body.rating && req.body.rating != '' &&
        req.body.imgSource && req.body.imgSource != '' &&
        req.body.description && req.body.description != '' &&
        req.body.director && req.body.director != '' &&
        req.body.actors && req.body.actors != ''){ 

            actors = req.body.actors.replaceAll("'","\"");
            actors[0] = "'";
            actors[actors.length] = "'";

            actorsList = JSON.parse(actors);

            title = req.body.title;
            year = req.body.year;
            genre = req.body.genre;
            rating = req.body.rating;
            imgSource = req.body.imgSource;
            description = req.body.description;
            director = req.body.director;

        }
    
        const session = driver.session();
        //proveri da li postoji film sa ovim imenom
    const matchResult = await session.run(`match (m:Movie {title: '${title}'}) return m;`);
    if(matchResult.records.length !== 0){
        res.status(409).send({message: "Movie with that title already exists"});
        return;
    }

    let query = `merge (m:Movie {title: "${title}", year: "${year}", genre: "${genre}", rating: "${rating}", imgSource: "${imgSource}", description: "${description}"}) 
                 merge (d:Director {name: "${director}"}) 
                 merge (d)-[:DIRECTED]->(m)-[:DIRECTED_BY]->(d)`;
    
    actorsList.forEach((a, index) => {
        query += ` merge (a${index}:actor {name: "${a}"}) 
                  merge (a${index})-[:ACTED_IN]->(m)-[:HAS_ACTOR]->(a${index})`
    })
    query += "return m;";
    
    const addResult = await session.run(query);
    session.close();
    if(addResult.records.length !== 0){
        const resTitle = addResult.records[0].get(0).properties.title;
        res.status(200).send({message: `Movie ${resTitle} added`});
        return;
    }

    res.status(400).send({message:'error while adding movie'});
})


function verifyToken(req, res, next) {

    const token = req.cookies['jwt'];
    if (!token) return res.status(401).send({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.userId = decoded.userId;
        next();
    }catch (error) {
        res.status(401).send({ error: 'Invalid token' });
    }
};

app.listen(port,() => {
    console.log("Listening on " + port);
})