import React from "react";
import './LoginSignup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginSignup(){
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faUser}/>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faLock}/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;