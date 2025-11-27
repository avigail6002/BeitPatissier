// components/GoogleAuthButton.tsx
import React from 'react';
import type { CredentialResponse } from '@react-oauth/google'; 
import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../services/AuthService'; 

interface GoogleAuthButtonProps {
    onSuccess: (token: string) => void;
    onError: (message: string) => void;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onSuccess, onError }) => {

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        const idToken = credentialResponse.credential;
        if (idToken) {
            try {
                const token = await googleLogin(idToken);
                onSuccess(token); 
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during server login.";
                console.error("Server-side login error:", errorMessage);
                onError(errorMessage);
            }
        }
    };

    const handleError = () => {
        console.error("Google Login Failed");
        onError("Google login attempt failed.");
    };
    
    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
        />
    );
};

export default GoogleAuthButton;