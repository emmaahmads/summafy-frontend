// auth.js
import { reactive } from 'vue';

export const authState = reactive({
    isAuthenticated: false,
    user: null,
    token: null,
});

export const login = (userData, token) => {
    authState.isAuthenticated = true;
    authState.user = userData;
    authState.token = token;
    localStorage.setItem('authToken', token); // Optional: Store token
};

export const logout = () => {
    authState.isAuthenticated = false;
    authState.user = null;
    authState.token = null;
    localStorage.removeItem('authToken'); // Optional: Clear token
};

export const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        authState.isAuthenticated = true;
        authState.token = token;
        // Optionally fetch user data from API
    }
};
