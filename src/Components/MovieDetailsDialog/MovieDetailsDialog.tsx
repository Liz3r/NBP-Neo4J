import { movie } from "../../models/movie";


function MovieDetailsDialog(
    { movieDetails, resetMovieDetails }: 
    { movieDetails: null | {movie: movie, userRated: boolean, userRating: number}, 
    resetMovieDetails: () => void}){

    //console.log(movieDetails);
    
    return(
        <>
        
        </>
    );
}

export default MovieDetailsDialog;