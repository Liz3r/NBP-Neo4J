import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Main.css';
import React, { useRef, useState } from "react";
import MovieDetailsDialog from "../MovieDetailsDialog/MovieDetailsDialog";
import AddMovieDialog from "../AddMovieDialog/AddMovieDialog";
import { movie } from "../../models/movie";
import { searchMovies } from "../../services/services";
import Movie from "../Movies/Movie";





function Main(){


    const [ addMovieDialogActive, setAddMovieDialogActive ] = useState<boolean>(false);
    const [ movieDetails, setMovieDetails ] = useState<null | movie>(null);
    const [ moviesList, setMoviesList ] = useState<Array<movie> | null>(null);

    const searchInputRef = useRef<HTMLInputElement>(null);

    function search(input: string | undefined){

        if(input){
            const movies: Array<movie> = [];
            searchMovies(input).then(data=>{
                data.forEach((m: movie) => {
                    movies.push(m);
                });

                setMoviesList(movies);
            });
        }

    }

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
                <input placeholder='Search' className='search-input' ref={searchInputRef}></input>
                <button onClick={() => {search(searchInputRef.current?.value)}}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>
        </div>

        <div className='movies-div'>
            {moviesList?.map((m,index) => <Movie movie={m} key={m.title}/>)}
         </div>
    </>
    );
}

export default Main;