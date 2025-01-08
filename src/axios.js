import axios from 'axios';
import { authState, checkAuth } from './auth';

const instance = axios.create({
    baseURL: 'http://localhost:8082'
});

checkAuth();

instance.interceptors.request.use(config => {
    console.log('Request:', config);
    console.log('Auth State:', authState.isAuthenticated);
    console.log('Token:', authState.token);
    if (authState.token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
    }
    return config;
});

export default instance;