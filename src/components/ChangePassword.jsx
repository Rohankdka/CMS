import React, { useState } from 'react';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            });

            const data = await response.json();
            if (data.success) {
                setMessage('Password changed successfully');
            } else {
                setMessage('Error changing password');
            }
        } catch (err) {
            setMessage('Something went wrong');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
                <form onSubmit={handleChangePassword}>
                    <div className="mb-4">
                        <label className="block mb-1">Old Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">New Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Change Password
                    </button>
                </form>
                {message && <p className="text-center mt-4">{message}</p>}
            </div>
        </div>
    );
}

export default ChangePassword;
