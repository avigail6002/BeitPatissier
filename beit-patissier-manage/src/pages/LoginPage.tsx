// pages/LoginPage.tsx
import React, { useState } from 'react';
import {GoogleAuthButton} from '../components/GoogleAuthButton';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); 
    const navigate = useNavigate();

    const handleLoginSuccess = (token: string) => {
        console.log("Login successful! JWT:", token);
        setIsLoggedIn(true);
        setStatusMessage("התחברת בהצלחה!");
        setErrorMessage('');

        setTimeout(() => {
            navigate('/מוצרים'); 
        }, 500); 
       
    };

    const handleLoginError = (error: string) => {
        console.error("Login Error:", error);
        setIsLoggedIn(false);
        setErrorMessage(`שגיאת התחברות: ${error}`);
        setStatusMessage('התחברות נכשלה');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>התחברות למערכת</h2>
            {isLoggedIn ? (
                <div style={{ color: 'green', fontWeight: 'bold' }}>{statusMessage}</div>
            ) : (
                <>
                    <GoogleAuthButton
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                    />
                </>
            )}

            {errorMessage && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {errorMessage}
                </div>
            )}

            <div style={{ marginTop: '20px', fontSize: '12px' }}>
                {statusMessage}
            </div>
        </div>
    );
};

export default LoginPage;