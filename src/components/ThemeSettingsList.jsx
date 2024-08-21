import React, { useEffect, useState } from 'react';
import { fetchThemeSettings, createThemeSetting, updateThemeSetting, deleteThemeSetting } from '../api';

const ThemeSettingsList = () => {
    const [settings, setSettings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSettings = async () => {
            try {
                const response = await fetchThemeSettings();
                setSettings(response.data);
            } catch (error) {
                console.error('Error fetching theme settings:', error);
            } finally {
                setLoading(false);
            }
        };

        getSettings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteThemeSetting(id);
            setSettings(settings.filter(setting => setting.settingId !== id));
        } catch (error) {
            console.error('Error deleting theme setting:', error);
        }
    };

    // Add similar functions for createThemeSetting and updateThemeSetting

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Theme Settings List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">SettingID</th>
                        <th className="border p-2">Theme ID</th>
                        <th className="border p-2">Heading ID</th>
                        <th className="border p-2">Setting Value</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {settings.map(setting => (
                        <tr key={setting.settingId}>
                            <td className="border p-2">{setting.settingId}</td>
                            <td className="border p-2">{setting.themeId}</td>
                            <td className="border p-2">{setting.headingId}</td>
                            <td className="border p-2">{setting.settingValue}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(setting.settingId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ThemeSettingsList;
