import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Main.css';
import React, { useEffect, useRef, useState } from "react";
import MovieDetailsDialog from "../MovieDetailsDialog/MovieDetailsDialog";
import AddMovieDialog from "../AddMovieDialog/AddMovieDialog";
import { movie } from "../../models/movie";
import { getMovies, getMoviesByDirector, getMoviesWithActor, searchMovies } from "../../services/services";
import Movie from "../Movies/Movie";
import useScrollBlock from "../../scrollBlock";


function Main({loggedUsername, resetLoggedUsername, setIsLoggedIn}: {loggedUsername: string, resetLoggedUsername: ()=>void, setIsLoggedIn: (logged:boolean) => void}){


    const [ addMovieDialogActive, setAddMovieDialogActive ] = useState<boolean>(false);
    const [ movieDetails, setMovieDetails ] = useState<null | {movie: movie, userRated: boolean, userRating: number}>(null);
    const [ moviesList, setMoviesList ] = useState<Array<movie> | null>(null);

    
    const [blockScroll, allowScroll] = useScrollBlock();

    const searchInputRef = useRef<HTMLInputElement>(null);


    useEffect(()=>{
        getRandMovies();
    },[])

    function search(input: string | undefined){
        if(input == ''){
            getRandMovies();
        }
        else if(input){
            const movies: Array<movie> = [];
            searchMovies(input).then(data=>{
                data.forEach((m: movie) => {
                    movies.push(m);
                });
                setMoviesList(movies);
            });
        }
    }

    function getDirectedBy(director: string | undefined){
        if(director){
            const movies: Array<movie> = [];
            getMoviesByDirector(director)?.then(data=>{
                if(data)
                data.forEach((m: movie) => {
                    movies.push(m);
                });
                allowScroll();
                setMovieDetails(null);
                setMoviesList(movies);
            });
        }
    }

    function getWithActor(director: string | undefined){
        if(director){
            const movies: Array<movie> = [];
            getMoviesWithActor(director)?.then(data=>{
                if(data)
                data.forEach((m: movie) => {
                    movies.push(m);
                });
                allowScroll();
                setMovieDetails(null);
                setMoviesList(movies);
            });
        }
    }

    function getRandMovies(){
        const movies: Array<movie> = [];
            getMovies()?.then(data=>{
                if(data)
                data.forEach((m: movie) => {
                    movies.push(m);
                });
                setMoviesList(movies);
            });
    }

    function logout(){
        document.cookie = `jwt=;username=;expires=${new Date(0).toUTCString()}; path=/;`;
        document.cookie = `username=;expires=${new Date(0).toUTCString()}; path=/;`;
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
                <AddMovieDialog resetAddMoviesDialog={() => {allowScroll();setAddMovieDialogActive(false)}}/> : 
                movieDetails? 
                <MovieDetailsDialog movieDetails={movieDetails} 
                resetMovieDetails={()=>{allowScroll();setMovieDetails(null);}} 
                getDirectedBy={(dir:string | undefined)=>getDirectedBy(dir)}
                getWithActor={(act:string | undefined)=>getWithActor(act)}/> 
                : <></>
                }
            </div>
        </div>
        :
        <></>
        }
        <div className='search-div'>
            <button className="add-movie-btn" onClick={()=>{blockScroll();setAddMovieDialogActive(true);}}>Add movie</button>
            <button className="show-btn">Show Recommendations</button>
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
            {moviesList?.map((m) => <Movie movie={m} setMovieDetails={(md: null | {movie: movie, userRated: boolean, userRating: number})=>{blockScroll();setMovieDetails(md);}} key={m.title}/>)}
         </div>
    </>
    );
}

export default Main;