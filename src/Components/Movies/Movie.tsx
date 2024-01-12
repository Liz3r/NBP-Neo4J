import React, { useEffect, useState } from "react";
import './Movie.css';
import { movie } from "../../models/movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getMovieDetails } from "../../services/services";


function Movies({ movie, setMovieDetails }: { movie:movie, setMovieDetails: (b:movie) => void}){
    
    function showDetails(id: string){
        getMovieDetails(id).then(res=>{
            if(res.status === 200){
                return res.json();
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