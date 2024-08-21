import React, { useEffect, useState } from 'react';
import { fetchThemes, createTheme, updateTheme, deleteTheme } from '../api';

const ThemeList = () => {
    const [themes, setThemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getThemes = async () => {
            try {
                const response = await fetchThemes();
                setThemes(response.data);
            } catch (error) {
                console.error('Error fetching themes:', error);
            } finally {
                setLoading(false);
            }
        };

        getThemes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTheme(id);
            setThemes(themes.filter(theme => theme.themeId !== id));
        } catch (error) {
            console.error('Error deleting theme:', error);
        }
    };

    // Add similar functions for createTheme and updateTheme

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Theme List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">ThemeID</th>
                        <th className="border p-2">Theme Name</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {themes.map(theme => (
                        <tr key={theme.themeId}>
                            <td className="border p-2">{theme.themeId}</td>
                            <td className="border p-2">{theme.themeName}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(theme.themeId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ThemeList;
