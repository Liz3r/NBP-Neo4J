import React from "react";
import './Movie.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


interface MovieProp{
    name: string,
    director: string,
    cast: Array<string>,
    rating: number,
    imgSource: string,
    year: number
}

function Movie({movieProp}: {movieProp: MovieProp}){

    const movie:MovieProp = movieProp;

    return(
        <div>
            <img src={movie.imgSource} alt={movie.name} className="movie-img"/>
            <h4 className="movie-name">{movie.name + " (" + movie.year + ")"}</h4>
            <div className="rating-div">
                <FontAwesomeIcon icon={faStar}/>
                <p>{movie.rating + "/10"}</p>
            </div>
        </div>
    );
}

export default Movie;