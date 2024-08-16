import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThemeSettings = () => {
    const [themeSettings, setThemeSettings] = useState([]);
    const [themes, setThemes] = useState([]);
    const [themeId, setThemeId] = useState('');
    const [headingId, setHeadingId] = useState('');
    const [viewName, setViewName] = useState('');
    const [selectedSetting, setSelectedSetting] = useState(null);

    useEffect(() => {
        fetchThemeSettings();
        fetchThemes();
        // Assuming you also have a way to fetch WebHeadings
        fetchWebHeadings();
    }, []);

    const fetchThemeSettings = async () => {
        try {
            const response = await axios.get('https://apitest.lunarit.com.np/api/ThemeSettings');
            setThemeSettings(response.data);
        } catch (error) {
            console.error('Error fetching theme settings:', error);
        }
    };

    const fetchThemes = async () => {
        try {
            const response = await axios.get('https://apitest.lunarit.com.np/api/Themes');
            setThemes(response.data);
        } catch (error) {
            console.error('Error fetching themes:', error);
        }
    };

    const fetchWebHeadings = async () => {
        // Fetch WebHeadings similarly and set them in state
    };

    const handleAddThemeSetting = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://apitest.lunarit.com.np/api/ThemeSettings', {
                themeId,
                headingId,
                viewName
            });
            fetchThemeSettings();
            setThemeId('');
            setHeadingId('');
            setViewName('');
        } catch (error) {
            console.error('Error adding theme setting:', error);
        }
    };

    const handleUpdateThemeSetting = async (setting) => {
        try {
            await axios.patch(`https://apitest.lunarit.com.np/api/ThemeSettings/${setting.settingId}`, {
                themeId: themeId || setting.themeId,
                headingId: headingId || setting.headingId,
                viewName: viewName || setting.viewName
            });
            fetchThemeSettings();
            setSelectedSetting(null);
        } catch (error) {
            console.error('Error updating theme setting:', error);
        }
    };

    const handleDeleteThemeSetting = async (settingId) => {
        try {
            await axios.delete(`https://apitest.lunarit.com.np/api/ThemeSettings/${settingId}`);
            fetchThemeSettings();
        } catch (error) {
            console.error('Error deleting theme setting:', error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Theme Settings</h2>
            <form onSubmit={handleAddThemeSetting} className="mb-4">
                <select
                    value={themeId}
                    onChange={(e) => setThemeId(e.target.value)}
                    className="p-2 border rounded mr-2"
                    required
                >
                    <option value="">Select Theme</option>
                    {themes.map((theme) => (
                        <option key={theme.themeId} value={theme.themeId}>{theme.themeName}</option>
                    ))}
                </select>
                <select
                    value={headingId}
                    onChange={(e) => setHeadingId(e.target.value)}
                    className="p-2 border rounded mr-2"
                    required
                >
                    <option value="">Select Heading</option>
                    {/* Map over fetched WebHeadings here */}
                </select>
                <input
                    type="text"
                    value={viewName}
                    onChange={(e) => setViewName(e.target.value)}
                    placeholder="Enter View Name"
                    className="p-2 border rounded mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Setting</button>
            </form>
            <ul>
                {themeSettings.map((setting) => (
                    <li key={setting.settingId} className="mb-2">
                        {selectedSetting === setting.settingId ? (
                            <div>
                                <select
                                    defaultValue={setting.themeId}
                                    onChange={(e) => setThemeId(e.target.value)}
                                    className="p-2 border rounded mr-2"
                                >
                                    {themes.map((theme) => (
                                        <option key={theme.themeId} value={theme.themeId}>{theme.themeName}</option>
                                    ))}
                                </select>
                                <select
                                    defaultValue={setting.headingId}
                                    onChange={(e) => setHeadingId(e.target.value)}
                                    className="p-2 border rounded mr-2"
                                >
                                    {/* Map over fetched WebHeadings here */}
                                </select>
                                <input
                                    type="text"
                                    defaultValue={setting.viewName}
                                    onChange={(e) => setViewName(e.target.value)}
                                    className="p-2 border rounded mr-2"
                                />
                                <button onClick={() => handleUpdateThemeSetting(setting)} className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
                                <button onClick={() => setSelectedSetting(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <span>{`Theme: ${setting.themeId}, Heading: ${setting.headingId}, View: ${setting.viewName}`}</span>
                                <button onClick={() => setSelectedSetting(setting.settingId)} className="bg-green-500 text-white px-4 py-2 rounded ml-4">Edit</button>
                                <button onClick={() => handleDeleteThemeSetting(setting.settingId)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeSettings;
