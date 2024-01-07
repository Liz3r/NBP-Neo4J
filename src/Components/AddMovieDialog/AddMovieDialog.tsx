import { useState } from 'react';
import './addMovieDialog.css';

function AddMovieDialog(){


    const [ title, setTitle ] = useState('');
    const [ year, setYear ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ imgSrc, setImgSrc ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ director, setDirector ] = useState('');
    const [ actors, setActors ] = useState([]);

    return(
        <>
            <h3>Add movie</h3> 
            <div className="input-div">
                <label htmlFor='movie-title-input'>Movie title:</label>
                <input className='movie-title-input'/>
                <button>Add title</button>
            </div>
            <div className="input-div">
                <label htmlFor='year-input'>Movie year:</label>
                <input className='year-input'/>
                <button>Add year</button>
            </div>
            <div className="input-div">
                <label htmlFor='rating-input'>Movie rating:</label>
                <input className='rating-input'/>
                <button>Add rating</button>
            </div>
            <div className="input-div">
                <label htmlFor='img-input'>Movie image source:</label>
                <input className='img-input'/>
                <button>Add image</button>
            </div>
            <div className="input-div">
                <label htmlFor='description-input'>Movie description:</label>
                <textarea className='description-input'/>
                <button>Add description</button>
            </div>
            <div className="input-div">
                <label htmlFor='movie-director-input'>Movie director:</label>
                <input className='movie-director-input'/>
                <button>Add director</button>
            </div>
            <div>
                <div className="input-div">
                    <label htmlFor='movie-actors-input'>Movie actors:</label>
                    <input className='movie-actors-input'/>
                    <button>Add actor</button>
                </div>
            </div>

            <div className='separator-div'></div>

            <div className='show-movie-div'>
                <div className='image-rating-div'>
                    <img className='movie-img' src={imgSrc}/>
                </div>
            </div>

        </>
    );
}

export default AddMovieDialog;