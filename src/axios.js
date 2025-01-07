import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8082'
});

instance.interceptors.request.use(config => {
    console.log('Request:', config);
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Adding token to request headers:', token);
    }
    return config;
});

export default instance;