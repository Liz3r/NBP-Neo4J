import React from "react";
import './Movie.css';
import { movie } from "../../models/movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


// interface movie{
//     title: string,
//     director: string,
//     cast: Array<string>,
//     rating: number,
//     imgSource: string,
//     year: number
// }

function Movie({movieProp}: {movieProp: movie}){

    const movie:movie = movieProp;

    return(
        <div>
            <img src={movie.imgSource} alt={movie.title} className="movie-img"/>
            <h4 className="movie-name">{movie.title + " (" + movie.year + ")"}</h4>
            <div className="rating-div">
                <FontAwesomeIcon icon={faStar}/>
                <p>{movie.rating + "/10"}</p>
            </div>
        </div>
    );
}

export default Movie;