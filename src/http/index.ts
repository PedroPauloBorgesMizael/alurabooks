import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;

}, function (error) {

    return Promise.reject(error);
    
})

export default http;