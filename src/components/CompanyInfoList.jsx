import React, { useEffect, useState } from 'react';
import { fetchCompanyInfo, createCompanyInfo, updateCompanyInfo, deleteCompanyInfo } from '../api';

const CompanyInfoList = () => {
    const [companyInfo, setCompanyInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCompanyInfo = async () => {
            try {
                const response = await fetchCompanyInfo();
                setCompanyInfo(response.data);
            } catch (error) {
                console.error('Error fetching company info:', error);
            } finally {
                setLoading(false);
            }
        };

        getCompanyInfo();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCompanyInfo(id);
            setCompanyInfo(companyInfo.filter(info => info.companyId !== id));
        } catch (error) {
            console.error('Error deleting company info:', error);
        }
    };

    // Add functions for createCompanyInfo and updateCompanyInfo

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Company Information List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">CompanyID</th>
                        <th className="border p-2">Company Name</th>
                        <th className="border p-2">Company Description</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companyInfo.map(info => (
                        <tr key={info.companyId}>
                            <td className="border p-2">{info.companyId}</td>
                            <td className="border p-2">{info.companyName}</td>
                            <td className="border p-2">{info.companyDescription}</td>
                            <td className="border p-2">
                                <button onClick={() => handleDelete(info.companyId)} className="text-red-500">Delete</button>
                                {/* Add Update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyInfoList;
