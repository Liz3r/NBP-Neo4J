import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movie } from "../../models/movie";
import './MovieDetailsDialog.css';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { rateMovie } from "../../services/services";


function MovieDetailsDialog(
    { movieDetails, resetMovieDetails }: 
    { movieDetails: null | {movie: movie, userRated: boolean, userRating: number}, 
    resetMovieDetails: () => void}){

    const [ checked, setChecked ] = useState<number>(0);

    useEffect(()=>{
        setChecked(movieDetails?.userRated? (movieDetails.userRating*2) : 0);
    },[])

    const numHalfStars = 20;

    function Rate(){
        const selectedValue = Number(checked)/2;
        
        if(((selectedValue % 0.5) !== 0) || selectedValue > 20 || selectedValue < 1){
            console.log('Postavljena vrednost nije validna');
            return;
        }

        rateMovie(movieDetails? movieDetails?.movie.id: '', selectedValue)?.then(data=>{
            if(data){
                console.log("Rating added");
                resetMovieDetails();
            }else{
                console.log("Error");
            }
        });
    }

    return(
        <>
                        <div className="cancel-button" onClick={resetMovieDetails}></div>
            <div className="details-div">
                <div className="img-rating-div">
                    <img className="movie-details-img" src={movieDetails?.movie.imgSource} alt={movieDetails?.movie.title}/>
                    <span className="imdbr">IMDb rating: <b>{movieDetails?.movie.rating+"/10"}</b></span>
                </div>
                <div className="title-desc-cast-div">
                    <h1 className="details-title">{movieDetails?.movie.title}</h1>
                    <h2 className="details-year">{movieDetails?.movie.year}</h2>
                    <h2 className="details-genre">{movieDetails?.movie.genre}</h2>
                    <p className="details-desc">{movieDetails?.movie.description}</p>
                    <div className="director-div">
                        <span>Directed by: </span>
                        <div className="name-div">{movieDetails?.movie.director}</div>
                    </div>
                    <div className="actors-div">
                        <span>Actors: </span>
                        {movieDetails?.movie.actors.map((actorName, index) => <div className="name-div" key={index}>{actorName}</div>)}
                    </div>
                </div>
            </div>
            <div className="user-rating-div">
                <h2>Your rating: </h2>
                <fieldset className="rate">
                    {[...Array(numHalfStars)].map((el, index) => 
                    <React.Fragment key={index}> 
                        <input type="radio" id={"rating"+index} name="rating" value={20-index} checked={checked == (20-index)} onChange={(e) => {setChecked(Number(e.currentTarget.value))}}/>
                        <label className={(index%2==0)? '' : 'half'} htmlFor={"rating"+index}></label> 
                    </React.Fragment>)}
                </fieldset>
            </div>
            <button className="rate-movie-btn" onClick={Rate}>Rate movie</button>

        </>
    );
}

export default MovieDetailsDialog;