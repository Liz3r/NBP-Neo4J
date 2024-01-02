import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';


function Filters(){

  const [ castList, setCastList ] = useState([]);
  const [ director, setDirector ] = useState(null);

  return(
    <div className='filters-div'>
      <div className='cast-div'>
        <p>cast:</p>


        <div className='name-div'>
          <div className='name'>Akira Kurosawa</div>
          <button className='remove-name-btn'> X</button>
        </div>

        <div className="addButton"></div>
      </div>
      <p>director:</p>
      <p>year:</p>
    </div>
  );
}

function App() {

  const [ filtersActive, setFiltersActive ] = useState(false);

  return (
    <div className="App">
      
      <div className='search-div'>
        <div className='search-input-div'>
          <input placeholder='Search' className='search-input'></input>
          <button>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>

        <button className='filters-btn' onClick={() => setFiltersActive(!filtersActive)}>Filters</button>
      </div>

      {(filtersActive)? <Filters/> : <></>}

      <div className='movies-div'>

      </div>

    </div>
  );
}

export default App;
