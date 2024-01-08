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

interface body{
    str: string
}
export function addMovie(movieObj: movie){

    console.log(movieObj);
    return fetch(`${URL}/addMovie`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body:  JSON.stringify(movieObj)
    }).then();
}