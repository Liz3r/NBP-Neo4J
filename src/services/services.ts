import { URL } from "../environment/env";
import { User } from "../models/User";
import { movie } from "../models/movie";

export function registerUser(username: string | undefined, email: string | undefined, password: string | undefined):Promise<Response>{

    return fetch(`${URL}/register/${username}/${email}/${password}`, {
        method: 'POST',
        credentials: 'include'
    });
        
}

export function loginUser( email: string | undefined, password: string | undefined):Promise<Response>{

    return fetch(`${URL}/login/${email}/${password}`, {
        method: 'GET',
        credentials: 'include'
    });
        
}

export function addMovie(movieObj: movie){

    //console.log(movieObj);
    return fetch(`${URL}/addMovie`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body:  JSON.stringify(movieObj)
    });/*.then(res=>{
        if(res.status == 200){
            return 
        }
    });*/
}

export function searchMovies(input: string){

    return fetch(`${URL}/getMoviesBySearch/${input}`, {
        method: 'GET',
        credentials: 'include'
    }).then(async res=>{
        if(res.ok){
            return res.json();
        }else{
            const err = await res.json();
            console.log(`Error ${res.status}: ${err.message}`);
        }
    }).then(data=>{
        return data;
    })
}

export function getMovieDetails(id: string){
    return fetch(`${URL}/getMovieDetails/${id}`, {
        method: 'GET',
        credentials: 'include'
    }).then(res => {
        if(res.ok){
            return res.json();
        }
    })
}