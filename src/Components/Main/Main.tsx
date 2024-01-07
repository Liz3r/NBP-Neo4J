import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Main.css';
import React, { useState } from "react";
import Movies from "../Movies/Movies";
import MovieDetailsDialog from "../MovieDetailsDialog/MovieDetailsDialog";
import AddMovieDialog from "../AddMovieDialog/AddMovieDialog";
import { movie } from "../../models/movie";





function Main(){


    const [ addMovieDialogActive, setAddMovieDialogActive ] = useState<boolean>(false);
    const [ movieDetails, setMovieDetails ] = useState<null | movie>(null);

    return(
    <>
        {(addMovieDialogActive || movieDetails)?
        <div className="dialog-box-div">
            <div className="dialog-content">
                {addMovieDialogActive? <AddMovieDialog/> : <MovieDetailsDialog/>}
            </div>
        </div>
        :
        <></>
        }
        <div className='search-div'>
            <button className="add-movie-btn" onClick={()=>setAddMovieDialogActive(true)}>Add movie</button>
            <div className='search-input-div'>
                <input placeholder='Search' className='search-input'></input>
                <button>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>
        </div>

        <div className='movies-div'>
            <Movies movieDetails={movieDetails} setMovieDetails={setMovieDetails}/>
         </div>
    </>
    );
}

export default Main;