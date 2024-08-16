import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPalette, FaCog, FaUsers, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/" className="text-white hover:text-gray-300">CMS Dashboard</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/login" className="flex items-center hover:text-gray-300">
                            <FaHome className="mr-2" />
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/forgot-password" className="flex items-center hover:text-gray-300">
                            <FaCog className="mr-2" />
                            Forgot Password
                        </Link>
                    </li>
                    <li>
                        <Link to="/change-password" className="flex items-center hover:text-gray-300">
                            <FaCog className="mr-2" />
                            Change Password
                        </Link>
                    </li>
                    <li>
                        <Link to="/userlist" className="flex items-center hover:text-gray-300">
                            <FaUsers className="mr-2" />
                            User List
                        </Link>
                    </li>
                    <li>
                        <Link to="/themes" className="flex items-center hover:text-gray-300">
                            <FaPalette className="mr-2" />
                            Themes
                        </Link>
                    </li>
                    <li>
                        <Link to="/themesettings" className="flex items-center hover:text-gray-300">
                            <FaCog className="mr-2" />
                            Theme Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
