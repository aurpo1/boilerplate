import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';


export function loginUser(dataToSubmit) {
    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data)
        
    //reducer로 보내기
    return { 
        type: "LOGIN_USER",
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/user/register', dataToSubmit)
        .then(response => response.data)
        
    //reducer로 보내기
    return { 
        type: "REGISTER_USER",
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/user/auth')
        .then(response => response.data)
        
    //reducer로 보내기
    return { 
        type: "AUTH_USER",
        payload: request
    }
}