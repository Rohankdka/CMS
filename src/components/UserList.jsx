import React, { useEffect, useState } from 'react';
import { fetchUserLists, createUser, updateUser, deleteUser } from '../api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetchUserLists();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.userId !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Add similar functions for createUser and updateUser

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">UserID</th>
                        <th className="border p-2">Username</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.userId}>
                            <td className="border p-2">{user.userId}</td>
                            <td className="border p-2">{user.userName}</td>
                            <td className="border p-2">{user.emailAddress}</td>
                            <td className="border p-2">{user.userRole}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(user.userId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
