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

    return fetch(`${URL}/addMovie`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body:  JSON.stringify(movieObj)
    });
}

export function searchMovies(input: string){

    return fetch(`${URL}/getMoviesBySearch/${input}`, {
        method: 'GET',
        credentials: 'include'
    }).then(async res=>{
        if(res.ok){
            return res.json();
        }
    });
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

export function rateMovie(id: string, rating: number){
    if(id !== ''){
        return fetch(`${URL}/rateMovie/${id}/${rating}`, {
            method: 'PUT',
            credentials: "include"
            }).then(res=>{
            if(res.ok){
                return res.json();
            }
        })
    }
}

export function getMoviesByDirector(director: string){
    if(director != ''){
        return fetch(`${URL}/getMoviesByDirector/${director}`, {
            method: 'GET',
            credentials: "include"
        }).then(res=>{
            if(res.ok){
                return res.json();
            }
        });
    }else{
        return null;
    }
}

export function getMoviesWithActor(actor: string){
    if(actor != ''){
        return fetch(`${URL}/getMoviesWithActor/${actor}`, {
            method: 'GET',
            credentials: "include"
        }).then(res=>{
            if(res.ok){
                return res.json();
            }
        });
    }else{
        return null;
    }
}

export function getMovies(){
    return fetch(`${URL}/getMovies`, {
        method: 'GET',
        credentials: 'include'
    }).then(res=>{
        if(res.ok){
            return res.json();
        }
    })
}

export function getRecommendedMovies(){
    return fetch(`${URL}/getRecommendedMovies`, {
        method: 'GET',
        credentials: 'include'
    }).then(res=>{
        if(res.ok){
            return res.json();
        }
    })
}