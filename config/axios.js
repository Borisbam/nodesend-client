import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.backendURL
});

console.log(backendURL)

export default clientAxios;