import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Main.css';
import React, { useRef, useState } from "react";
import MovieDetailsDialog from "../MovieDetailsDialog/MovieDetailsDialog";
import AddMovieDialog from "../AddMovieDialog/AddMovieDialog";
import { movie } from "../../models/movie";
import { searchMovies } from "../../services/services";
import Movie from "../Movies/Movie";


function Main({loggedUsername, resetLoggedUsername, setIsLoggedIn}: {loggedUsername: string, resetLoggedUsername: ()=>void, setIsLoggedIn: (logged:boolean) => void}){


    const [ addMovieDialogActive, setAddMovieDialogActive ] = useState<boolean>(false);
    const [ movieDetails, setMovieDetails ] = useState<null | {movie: movie, userRated: boolean, userRating: number}>(null);
    const [ moviesList, setMoviesList ] = useState<Array<movie> | null>(null);

    const searchInputRef = useRef<HTMLInputElement>(null);

    function search(input: string | undefined){

        if(input){
            const movies: Array<movie> = [];
            searchMovies(input).then(data=>{
                data.forEach((m: movie) => {
                    //console.log(m.id);
                    movies.push(m);

                });

                setMoviesList(movies);
            });
        }

    }

    function logout(){
        //fetch
        setIsLoggedIn(false);
        resetLoggedUsername();
    }

    return(
    <>
        {(addMovieDialogActive || movieDetails)?
        <div className="dialog-box-div">
            <div className="dialog-content">
                {
                addMovieDialogActive? 
                <AddMovieDialog resetAddMoviesDialog={() => setAddMovieDialogActive(false)}/> : 
                movieDetails? 
                <MovieDetailsDialog movieDetails={movieDetails} resetMovieDetails={()=>{setMovieDetails(null)}}/> 
                : <></>
                }
            </div>
        </div>
        :
        <></>
        }
        <div className='search-div'>
            <button className="add-movie-btn" onClick={()=>setAddMovieDialogActive(true)}>Add movie</button>
            <div className='search-input-div'>
                <input placeholder='Search' className='search-input' ref={searchInputRef}></input>
                <button className="search-btn" onClick={() => {search(searchInputRef.current?.value)}}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>

            <div className="logout-div">
                <b className="logged-username">{loggedUsername}</b>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </div>

        <div className='movies-div'>
            {moviesList?.map((m) => <Movie movie={m} setMovieDetails={(md: null | {movie: movie, userRated: boolean, userRating: number})=>{setMovieDetails(md)}} key={m.title}/>)}
         </div>
    </>
    );
}

export default Main;