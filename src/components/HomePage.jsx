import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to CMS</h1>
                    <p className="mt-2 text-xl">Manage your content efficiently and effectively.</p>
                </div>
            </header>
            <main className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">User Management</h2>
                        <p className="mt-2 text-gray-600">Manage user accounts, roles, and permissions.</p>
                        <Link to="/admin-dashboard" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Go to Admin Dashboard</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">Content Management</h2>
                        <p className="mt-2 text-gray-600">Create, update, and manage your content easily.</p>
                        <Link to="/superadmin-dashboard" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Go to Superadmin Dashboard</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">Settings</h2>
                        <p className="mt-2 text-gray-600">Configure system settings and preferences.</p>
                        <Link to="/editor-dashboard" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Go to Editor Dashboard</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
