import React, { useEffect, useState } from 'react';
import { fetchSectionContents, createSectionContent, updateSectionContent, deleteSectionContent } from '../api';

const SectionContentList = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContents = async () => {
            try {
                const response = await fetchSectionContents();
                setContents(response.data);
            } catch (error) {
                console.error('Error fetching section contents:', error);
            } finally {
                setLoading(false);
            }
        };

        getContents();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteSectionContent(id);
            setContents(contents.filter(content => content.contentId !== id));
        } catch (error) {
            console.error('Error deleting section content:', error);
        }
    };

    // Add functions for createSectionContent and updateSectionContent

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Section Contents List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">ContentID</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(content => (
                        <tr key={content.contentId}>
                            <td className="border p-2">{content.contentId}</td>
                            <td className="border p-2">{content.title}</td>
                            <td className="border p-2">{content.description}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(content.contentId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SectionContentList;
