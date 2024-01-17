import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movie } from "../../models/movie";
import './MovieDetailsDialog.css';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";


function MovieDetailsDialog(
    { movieDetails, resetMovieDetails }: 
    { movieDetails: null | {movie: movie, userRated: boolean, userRating: number}, 
    resetMovieDetails: () => void}){

    //console.log(movieDetails); <h2>Your rating:</h2>
    
    return(
        <>
            <div className="details-div">
                <div className="img-rating-div">
                    <img className="movie-details-img" src={movieDetails?.movie.imgSource} alt={movieDetails?.movie.title}/>
                </div>
                <div className="title-desc-cast-div">
                        <div className="cancel-button"></div>
                    <h1 className="details-title">{movieDetails?.movie.title}</h1>
                    <h2 className="details-year">{movieDetails?.movie.year}</h2>
                    <h2 className="details-genre">{movieDetails?.movie.genre}</h2>
                    <p className="details-desc">{movieDetails?.movie.description}</p>
                    <div className="director-div">
                        <span>Directed by: </span>
                    </div>
                    <div className="actors-div">
                        <span>Actors: </span>
                    </div>
                </div>
            </div>
            <div className="user-rating-div">
            <fieldset className="rate">
    <input type="radio" id="rating10" name="rating" value="10" /><label htmlFor="rating10" title="5 stars"></label>
    <input type="radio" id="rating9" name="rating" value="9" /><label className="half" htmlFor="rating9" title="4 1/2 stars"></label>
    <input type="radio" id="rating8" name="rating" value="8" /><label htmlFor="rating8" title="4 stars"></label>
    <input type="radio" id="rating7" name="rating" value="7" /><label className="half" htmlFor="rating7" title="3 1/2 stars"></label>
    <input type="radio" id="rating6" name="rating" value="6" /><label htmlFor="rating6" title="3 stars"></label>
    <input type="radio" id="rating5" name="rating" value="5" /><label className="half" htmlFor="rating5" title="2 1/2 stars"></label>
    <input type="radio" id="rating4" name="rating" value="4" /><label htmlFor="rating4" title="2 stars"></label>
    <input type="radio" id="rating3" name="rating" value="3" /><label className="half" htmlFor="rating3" title="1 1/2 stars"></label>
    <input type="radio" id="rating2" name="rating" value="2" /><label htmlFor="rating2" title="1 star"></label>
    <input type="radio" id="rating1" name="rating" value="1" /><label className="half" htmlFor="rating1" title="1/2 star"></label>
    <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label>
</fieldset>
            </div>
            <button className="rate-movie-btn">Rate movie</button>

        </>
    );
}

export default MovieDetailsDialog;