import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl">CMS</Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/user-list" className="text-white">User List</Link>
                    <Link to="/add-user" className="text-white">Add User</Link>
                    <Link to="/themes" className="text-white">Themes</Link>
                    <Link to="/theme-settings" className="text-white">Theme Settings</Link>
                    <Link to="/company-info" className="text-white">Company Info</Link>
                    <Link to="/web-heading" className="text-white">Web Heading</Link>
                    <Link to="/section-content" className="text-white">Section Content</Link>
                    {/* Include other links as necessary */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
