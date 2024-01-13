import React, { useEffect, useState } from "react";
import './Movie.css';
import { movie } from "../../models/movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getMovieDetails } from "../../services/services";


function Movies({ movie, setMovieDetails }: { movie:movie, setMovieDetails: (md: null | {movie: movie, userRated: boolean, userRating: number}) => void}){
    
    function showDetails(id: string){
        
        getMovieDetails(id).then((data:{movie: movie, userRated: boolean, userRating: number})=>{
            // console.log(('id' in data.movie),
            // ('title' in data.movie),
            // ('year' in data.movie),
            // ('genre' in data.movie),
            // ('rating' in data.movie),
            // ('imgSource' in data.movie),
            // ('description' in data.movie),
            // ('userRated' in data));

            if(('id' in data.movie) && data.movie.id !== '' &&
            ('title' in data.movie) && data.movie.title !== '' &&
            ('year' in data.movie) && data.movie.year !== '' &&
            ('genre' in data.movie) && data.movie.genre !== '' &&
            ('rating' in data.movie) && data.movie.rating !== '' &&
            ('imgSource' in data.movie) && data.movie.imgSource !== '' &&
            ('description' in data.movie) && data.movie.description !== '' &&
            ('userRated' in data))
            {
                setMovieDetails(data);
            }
        })
    }

    return(
        <>
            <div className="single-movie-div">
                <img src={movie.imgSource} alt={movie.title} className="movie-img"/>
                <h4 className="movie-title">{movie.title + " (" + movie.year + ")"}</h4>
                    
                    <div className="secondary-items">
                        <p className="genre-text">{movie.genre}</p>
                        <div className="rating-div">
                            <FontAwesomeIcon className="star-icon"icon={faStar}/>
                            <p className="rating-text">{movie.rating + "/10"}</p>
                        </div>
                        <button className="details-btn" onClick={()=>{showDetails(movie.id)}}>Details</button>
                    </div>
            </div>
            
        </>
    );    
}

export default Movies;