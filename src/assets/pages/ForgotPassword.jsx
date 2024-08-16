import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const handleSendCode = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://apitest.lunarit.com.np/api/Accounts/ForgotPassword', {
                emailAddress,
            });
            setCodeSent(true);
            console.log('Verification code sent', response.data);
        } catch (error) {
            console.error('Error sending code', error);
        }
    };

    const handleVerifyCode = (e) => {
        e.preventDefault();
        // Handle verification code logic
        console.log('Code verified', verificationCode);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                {!codeSent ? (
                    <form onSubmit={handleSendCode}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Send Verification Code
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyCode}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Verification Code</label>
                            <input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                        >
                            Verify Code
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
