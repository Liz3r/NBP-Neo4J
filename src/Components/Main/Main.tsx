import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Main.css';
import React from "react";
import Movie from "../Movie/Movie";





function Main(){


    

    return(
    <>
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
    </>
    );
}

export default Main;