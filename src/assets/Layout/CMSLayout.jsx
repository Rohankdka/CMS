import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

const CMSLayout = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('');

    useEffect(() => {
        // Fetch and apply the current theme from the server or user settings
        const fetchCurrentTheme = async () => {
            try {
                // Replace with actual API call to fetch current theme
                const theme = 'default-theme'; // Example theme
                setCurrentTheme(theme);
                document.body.className = theme; // Apply the theme globally
            } catch (error) {
                console.error('Error fetching current theme:', error);
            }
        };

        fetchCurrentTheme();
    }, []);

    return (
        <div className={`cms-layout ${currentTheme}`}>
            <Navbar />
            <main className="flex-1 p-6">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                CMS Footer
            </footer>
        </div>
    );
};

export default CMSLayout;
