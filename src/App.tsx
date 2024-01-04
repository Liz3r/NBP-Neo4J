import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';




function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">
      
      <LoginSignup/>

    </div>
  );
}

export default App;
/*
<div className='search-div'>
        <div className='search-input-div'>
          <input placeholder='Search' className='search-input'></input>
          <button>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>

      </div>


      <div className='movies-div'>

      </div>
*/