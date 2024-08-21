import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userRole, setUserRole] = useState('');
    const [loginStatus, setLoginStatus] = useState(true);
    const [userProfile, setUserProfile] = useState('');
    const [companyId, setCompanyId] = useState(1); // Default companyId or handle as needed

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/users', {
                userName,
                userPassword, // Ensure password is hashed before sending
                emailAddress,
                userRole,
                loginStatus,
                userProfile,
                companyId,
            });
            console.log('User added successfully:', response.data);
            // Reset form or redirect as needed
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="userPassword"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        id="userRole"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Superadmin">Superadmin</option>
                        <option value="Editor">Editor</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="userProfile" className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                    <input
                        type="text"
                        id="userProfile"
                        value={userProfile}
                        onChange={(e) => setUserProfile(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
