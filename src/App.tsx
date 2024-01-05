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


  useEffect(()=>{
    if(getCookie("jwt") != null){
      setIsLoggedIn(true);
    }
    console.log(getCookie("jwt"));
  },[])

  return (
    <div className="App">
      {!isLoggedIn? <LoginSignup props={{isLoggedIn: isLoggedIn, setIsLoggedIn: (isLogged:boolean)=>setIsLoggedIn(isLogged) }}/> : <Main/>}
    </div>
  );
  
}

export default App;
