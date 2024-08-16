import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://apitest.lunarit.com.np/api/Accounts/Login', {
                username,
                userPassword,
            });
            // Handle successful login
            console.log('Login successful:', response.data);
            // Redirect to dashboard or other page
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="userPassword"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500">Don't have an account?</span>
                    <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </div>
                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
