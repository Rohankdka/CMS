import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUser, setNewUser] = useState({
        userName: '',
        userPassword: '',
        emailAddress: '',
        userAddress: '',
        userPhone: '',
        userRole: 'Admin', // Default role
        loginStatus: false,
        companyId: 1,
        userFile: null,
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://apitest.lunarit.com.np/api/UserLists');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user list', error);
        }
    };

    const handleUserSelect = async (id) => {
        try {
            const response = await axios.get(`https://apitest.lunarit.com.np/api/UserLists/${id}`);
            setSelectedUser(response.data);
        } catch (error) {
            console.error('Error fetching user details', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewUser({ ...newUser, userFile: e.target.files[0] });
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in newUser) {
            formData.append(key, newUser[key]);
        }
        try {
            await axios.post('https://apitest.lunarit.com.np/api/UserLists', formData);
            fetchUsers();
            setNewUser({
                userName: '',
                userPassword: '',
                emailAddress: '',
                userAddress: '',
                userPhone: '',
                userRole: 'Admin',
                loginStatus: false,
                companyId: 1,
                userFile: null,
            });
        } catch (error) {
            console.error('Error adding user', error);
        }
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in selectedUser) {
            formData.append(key, selectedUser[key]);
        }
        try {
            await axios.put(`https://apitest.lunarit.com.np/api/UserLists/${selectedUser.userId}`, formData);
            fetchUsers();
            setSelectedUser(null);
        } catch (error) {
            console.error('Error updating user', error);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">User List</h2>

            {/* User List Table */}
            <table className="min-w-full bg-white border mb-6">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId} className="text-center">
                            <td className="py-2 px-4 border-b">{user.userId}</td>
                            <td className="py-2 px-4 border-b">{user.userName}</td>
                            <td className="py-2 px-4 border-b">{user.emailAddress}</td>
                            <td className="py-2 px-4 border-b">{user.userRole}</td>
                            <td className="py-2 px-4 border-b">
                                {user.loginStatus ? (
                                    <span className="text-green-500">Active</span>
                                ) : (
                                    <span className="text-red-500">Inactive</span>
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-blue-500 text-white px-4 py-1 rounded"
                                    onClick={() => handleUserSelect(user.userId)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add User Form */}
            <form onSubmit={handleAddUser} className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Add New User</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="userName"
                        value={newUser.userName}
                        onChange={handleInputChange}
                        placeholder="Username"
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="userPassword"
                        value={newUser.userPassword}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="emailAddress"
                        value={newUser.emailAddress}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="userAddress"
                        value={newUser.userAddress}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="userPhone"
                        value={newUser.userPhone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="p-2 border rounded"
                    />
                    <select
                        name="userRole"
                        value={newUser.userRole}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Superadmin">Superadmin</option>
                        <option value="Editor">Editor</option>
                    </select>
                    <input
                        type="file"
                        name="userFile"
                        onChange={handleFileChange}
                        className="p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add User
                </button>
            </form>

            {/* Update User Form */}
            {selectedUser && (
                <form onSubmit={handleUpdateUser}>
                    <h3 className="text-2xl font-bold mb-4">Update User</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="userName"
                            value={selectedUser.userName}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, userName: e.target.value })
                            }
                            placeholder="Username"
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            name="userPassword"
                            value={selectedUser.userPassword}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, userPassword: e.target.value })
                            }
                            placeholder="Password"
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="emailAddress"
                            value={selectedUser.emailAddress}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, emailAddress: e.target.value })
                            }
                            placeholder="Email Address"
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="userAddress"
                            value={selectedUser.userAddress}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, userAddress: e.target.value })
                            }
                            placeholder="Address"
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="userPhone"
                            value={selectedUser.userPhone}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, userPhone: e.target.value })
                            }
                            placeholder="Phone"
                            className="p-2 border rounded"
                        />
                        <select
                            name="userRole"
                            value={selectedUser.userRole}
                            onChange={(e) =>
                                setSelectedUser({ ...selectedUser, userRole: e.target.value })
                            }
                            className="p-2 border rounded"
                        >
                            <option value="Admin">Admin</option>
                            <option value="Superadmin">Superadmin</option>
                            <option value="Editor">Editor</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Update User
                    </button>
                </form>
            )}
        </div>
    );
};

export default UserList;
