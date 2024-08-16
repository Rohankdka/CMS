import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Themes = () => {
    const [themes, setThemes] = useState([]);
    const [themeName, setThemeName] = useState('');
    const [selectedTheme, setSelectedTheme] = useState(null);

    useEffect(() => {
        fetchThemes();
    }, []);

    const fetchThemes = async () => {
        try {
            const response = await axios.get('https://apitest.lunarit.com.np/api/Themes');
            setThemes(response.data);
        } catch (error) {
            console.error('Error fetching themes:', error);
        }
    };

    const handleAddTheme = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://apitest.lunarit.com.np/api/Themes', { themeName });
            fetchThemes();
            setThemeName('');
        } catch (error) {
            console.error('Error adding theme:', error);
        }
    };

    const handleUpdateTheme = async (theme) => {
        try {
            await axios.patch(`https://apitest.lunarit.com.np/api/Themes/${theme.themeId}`, { themeName: themeName || theme.themeName });
            fetchThemes();
            setSelectedTheme(null);
        } catch (error) {
            console.error('Error updating theme:', error);
        }
    };

    const handleDeleteTheme = async (themeId) => {
        try {
            await axios.delete(`https://apitest.lunarit.com.np/api/Themes/${themeId}`);
            fetchThemes();
        } catch (error) {
            console.error('Error deleting theme:', error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Themes</h2>
            <form onSubmit={handleAddTheme} className="mb-4">
                <input
                    type="text"
                    value={themeName}
                    onChange={(e) => setThemeName(e.target.value)}
                    placeholder="Enter Theme Name"
                    className="p-2 border rounded mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Theme</button>
            </form>
            <ul>
                {themes.map((theme) => (
                    <li key={theme.themeId} className="mb-2">
                        {selectedTheme === theme.themeId ? (
                            <div>
                                <input
                                    type="text"
                                    defaultValue={theme.themeName}
                                    onChange={(e) => setThemeName(e.target.value)}
                                    className="p-2 border rounded mr-2"
                                />
                                <button onClick={() => handleUpdateTheme(theme)} className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
                                <button onClick={() => setSelectedTheme(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <span>{theme.themeName}</span>
                                <button onClick={() => setSelectedTheme(theme.themeId)} className="bg-green-500 text-white px-4 py-2 rounded ml-4">Edit</button>
                                <button onClick={() => handleDeleteTheme(theme.themeId)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Themes;
