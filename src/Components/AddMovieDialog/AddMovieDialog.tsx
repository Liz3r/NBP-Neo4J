import { useRef, useState } from 'react';
import './addMovieDialog.css';
import { movie } from '../../models/movie';
import { addMovie } from '../../services/services';

function AddMovieDialog({resetAddMoviesDialog}: {resetAddMoviesDialog: () => void}){

    const [ jsonErrorMsg, setJsonErrorMsg ] = useState('');
    const textRef = useRef<HTMLTextAreaElement>(null);
    


    function addMovies(value: string){

        //regExp check
        const moviesList: Array<movie> = JSON.parse(value);
        //console.log(obj);

        var err = false;
        moviesList.forEach( (m,index) => {
            if(err)
                return;
            console.log(index);
            if(!(m.actors?true:false) || m.actors == null){
                setJsonErrorMsg('actors property invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.description?true:false) || m.description == ''){
                setJsonErrorMsg('description propery invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.director?true:false) || m.director == ''){
                setJsonErrorMsg('director property invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.genre?true:false) || m.genre == ''){
                setJsonErrorMsg('genre property invalid or null, element index: '+index);
                err = true;
                err = true;
                return;
            }
            if(!(m.imgSource?true:false) || m.imgSource == ''){
                setJsonErrorMsg('imgSource property invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.rating?true:false) || m.rating == ''){
                setJsonErrorMsg('rating property invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.title?true:false) || m.title == ''){
                setJsonErrorMsg('title property invalid or null, element index: '+index);
                err = true;
                return;
            }
            if(!(m.year?true:false) || m.year == ''){
                setJsonErrorMsg('year property invalid or null, element index: '+index);
                err = true;
                return;
            }
            
        })
        if(!err){
            setJsonErrorMsg('');
            //fetch
            moviesList.forEach(async (m) => await addMovie(m));
        }
        return;
    }

    const placeholderText = 
        "[\n"+
        "\t\"title\""+":" +"\"sample title...\""+",\n"+
        "\t\"year\""+":"+"\"1970...\""+",\n"+
        "\t\"genre\""+":"+ "\"genre name...\""+",\n"+
        "\t\"rating\""+":"+ "\"8.4...\""+",\n"+
        "\t\"imgSource\""+":"+ "\"link to img source...\""+",\n"+
        "\t\"description\""+":"+ "\"sample description...\""+",\n"+
        "\t\"director\""+":"+ "\"director name\""+",\n"+
        "\t\"actors\""+":"+ "\"[ 'actor_name1', 'actor_name2', ... ]\"\n"+
        "]\n"+","+
        ".\n"+
        ".\n"+
        ".\n";

    return(
        <>
            <div className='json-cancel-button' onClick={resetAddMoviesDialog}></div>
            <h3 className='json-title'>Insert movies in JSON format</h3>
            <textarea ref={textRef} className="json-input" placeholder={placeholderText}></textarea>
            <div className='jsonError'>{jsonErrorMsg}</div>
            <button className='add-json-btn' onClick={() => {textRef.current? addMovies(textRef.current.value):setJsonErrorMsg('input element undefined')}}>Add movies</button>
        </>
    );
}

export default AddMovieDialog;