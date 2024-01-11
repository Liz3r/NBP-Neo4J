import React, { useEffect, useState } from "react";
import './Movie.css';
import { movie } from "../../models/movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function Movies({ movie }: { movie:movie}){
    
    return(
        <>
            <div className="single-movie-div">
                <img src={movie.imgSource} alt={movie.title} className="movie-img"/>
                <h4 className="movie-title">{movie.title + " (" + movie.year + ")"}</h4>
                    
                        <p className="genre-text">{movie.genre}</p>
                    <div className="rating-div">
                        <FontAwesomeIcon className="star-icon"icon={faStar}/>
                        <p className="rating-text">{movie.rating + "/10"}</p>
                    </div>
            </div>
            
        </>
    );    
}

export default Movies;