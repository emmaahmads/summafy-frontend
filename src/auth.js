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
    localStorage.setItem('authToken', token);
};

export const logout = () => {
    console.log('logout');
    authState.isAuthenticated = false;
    authState.user = null;
    authState.token = null;
    localStorage.removeItem('authToken');
};

export const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        authState.isAuthenticated = true;
        authState.token = token;
    }
};
