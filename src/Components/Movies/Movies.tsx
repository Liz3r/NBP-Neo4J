import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { movie } from "../../models/movie";

function Movies(){

    const [ moviesList, setMoviesList ] = useState([]);
    const [ movieDetails, setMovieDetails ] = useState(null);

    useEffect(()=>{

        //fetch movies
    },[]);

    return(
        <>
            {moviesList.map(m => <Movie movieProp={m}/>)}
            
            {movieDetails?
            
            <div className="details-container-div">
                <div className="details-content-div">

                </div>
            </div>
            :
            <></>
            }
        </>
    );    
}

export default Movies;