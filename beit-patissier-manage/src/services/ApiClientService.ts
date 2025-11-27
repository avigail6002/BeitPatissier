// services/apiClientService.ts
import axios from 'axios';
import { isAuthenticated } from './AuthService';

const ApiClient = axios.create({
    baseURL: 'https://localhost:7212/api', 
    headers: {
        'Content-Type': 'application/json',
    }
});

/**
 * Interceptor לבקשות: מוסיף את ה-JWT לכותרת Authorization לפני שליחת הבקשה.
 * זה מבטיח שכל קריאה מאובטחת לשרת תכלול את הטוקן.
 */
ApiClient.interceptors.request.use(
    (config) => {
        if (isAuthenticated()) {
            const token = localStorage.getItem('authToken');
            
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

ApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("Authentication required or JWT expired. Logging user out.");
            localStorage.removeItem('authToken');
            window.location.href = '/'; 
        }
        return Promise.reject(error);
    }
);

export default ApiClient;