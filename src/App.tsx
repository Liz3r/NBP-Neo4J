import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Main from './Components/Main/Main';


function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b? b.pop() : null;
}


function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ loggedUsername, setLoggedUsername] = useState('');

  useEffect(()=>{
    if(getCookie("jwt") != null){
      setIsLoggedIn(true);
    }
    //console.log(getCookie("jwt"));
  },[])

  return (
    <div className="App">
      {!isLoggedIn? <LoginSignup props={{setIsLoggedIn: (isLogged:boolean)=>setIsLoggedIn(isLogged), setLoggedUsername: (username:string)=>setLoggedUsername(username)}}/>
       : <Main loggedUsername={loggedUsername} resetLoggedUsername={()=>setLoggedUsername('')} setIsLoggedIn={(logged:boolean)=>{setIsLoggedIn(logged)}}/>}
    </div>
  );
  
}

export default App;
