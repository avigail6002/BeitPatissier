// services/authService.ts

import axios from 'axios';
import apiClient from './ApiClientService';

interface GoogleLoginResponse {
    token: string;
}

const API_BASE_ROUTE = '/Auth'; 
export const googleLogin = async (idToken: string): Promise<string> => {
    try {
        const response = await apiClient.post<GoogleLoginResponse>(`${API_BASE_ROUTE}/google-login`, {
            idToken: idToken 
        });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        
        return token;

    } catch (error) {
        console.error("Google Login failed on server:", error);
                if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.Error) {
             throw new Error(error.response.data.Error);
        }
        throw new Error('Login failed due to an unknown error');
    }
};

export const isAuthenticated = (): boolean => {
    return localStorage.getItem('authToken') !== null;
};