import axios from 'axios';
import env from 'react-dotenv';

export default axios.create({
    baseURL: env.AUTH_BACKEND_URL
});

export const axiosPrivate = axios.create({
    baseURL: env.AUTH_BACKEND_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});