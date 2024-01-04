import { URL } from "../environment/env";
import { User } from "../models/User";

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