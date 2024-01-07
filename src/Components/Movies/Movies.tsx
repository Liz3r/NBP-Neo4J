import React, { useEffect, useState } from "react";
import { movie } from "../../models/movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface movieProps{
    movieDetails: null | movie,
    setMovieDetails: (value: movie | null) => void;
}

function Movies({ movieDetails, setMovieDetails } : movieProps){

    
    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(()=>{

        //fetch movies
    },[]);

    return(
        <>
        {moviesList.map((m: movie) => {
            
            <div>
                <img src={m.imgSource} alt={m.title} className="movie-img"/>
                <h4 className="movie-name">{m.title + " (" + m.year + ")"}</h4>
                    <div className="rating-div">
                        <FontAwesomeIcon icon={faStar}/>
                        <p>{m.rating + "/10"}</p>
                    </div>
            </div>
            })
        }
            
        </>
    );    
}

export default Movies;