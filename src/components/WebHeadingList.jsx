import React, { useEffect, useState } from 'react';
import { fetchWebHeading, createWebHeading, updateWebHeading, deleteWebHeading } from '../api';

const WebHeadingList = () => {
    const [headings, setHeadings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHeadings = async () => {
            try {
                const response = await fetchWebHeading();
                setHeadings(response.data);
            } catch (error) {
                console.error('Error fetching web headings:', error);
            } finally {
                setLoading(false);
            }
        };

        getHeadings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteWebHeading(id);
            setHeadings(headings.filter(heading => heading.headingId !== id));
        } catch (error) {
            console.error('Error deleting web heading:', error);
        }
    };

    // Add functions for createWebHeading and updateWebHeading

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Web Headings List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">HeadingID</th>
                        <th className="border p-2">Heading Name</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {headings.map(heading => (
                        <tr key={heading.headingId}>
                            <td className="border p-2">{heading.headingId}</td>
                            <td className="border p-2">{heading.headingName}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(heading.headingId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WebHeadingList;
