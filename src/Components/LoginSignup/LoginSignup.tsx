import React, { useRef, useState } from "react";
import './LoginSignup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { loginUser, registerUser } from "../../services/services";

function LoginSignup({props}:any){

    const { setIsLoggedIn, setLoggedUsername } = props;
    const [ signupLogin , setSignupLogin ] = useState('signup');
    const [ errorMsg, setErrorMsg ] = useState('');

    const inputUsername = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    function onSubmitBtn(action:string):void{
        if(action != signupLogin){
            setErrorMsg('');
            setSignupLogin(action);
            return;
        }
        
        const username = inputUsername.current?.value;
        const email = inputEmail.current?.value;
        const password = inputPassword.current?.value;

        if(username?.length === 0 ||
           email?.length === 0 ||
           password?.length === 0 ){
            setErrorMsg('fill empty fields');
            return;
        }

        if(action === 'login'){
            loginUser(email,password).then(res=>{
                if(res.status === 200){
                    return res.json();
                }else{
                    console.log('Invalid username/password');
                    return;
                }
                
            }).then(data=>{
                if(data){
                    console.log(data);
                    document.cookie = `username=${data.username};`;
                    setIsLoggedIn(true);
                    setLoggedUsername(data.username);
                }
            }).catch(err => {
                console.log(err);
            });
            
            return;
        }
        if(action === 'signup'){
            registerUser(username,email,password).then(res=>{
                if(res.status === 200){
                    return res.json();
                }
                if(res.status === 409){
                    setErrorMsg('User already exists');
                    return res.json();
                }
            }).then(data=>{
                console.log(data);
            }).catch(err => {
                console.log(err);
            });
            return;
        }

    }

    return(
        <div className="container">
            <div className="header">
                <div className="text">{(signupLogin === 'signup')?"Sign up":"Login"}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {(signupLogin === 'signup')?
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faUser}/>
                    <input ref={inputUsername} type="text" placeholder="Username"/>
                </div> : <></>}
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                    <input ref={inputEmail} type="text" placeholder="Email"/>
                </div>
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faLock}/>
                    <input ref={inputPassword} type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="error-div">{errorMsg}</div>
            <div className="submit-container">
                <button className={(signupLogin === 'signup')?"submit":"submit disabled-btn"} onClick={() => onSubmitBtn('signup')}>Sign Up</button>
                <button className={(signupLogin === 'signup')?"submit disabled-btn":"submit"} onClick={() => onSubmitBtn('login')}>Login</button>
            </div>
        </div>
    );
}

export default LoginSignup;