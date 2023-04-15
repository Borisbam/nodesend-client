import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.backendURL
});

console.log(process.env.backendURL)

export default clientAxios;