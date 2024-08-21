import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import SuperadminDashboard from './components/SuperadminDashboard';
import AdminDashboard from './components/AdminDashboard';
import EditorDashboard from './components/EditorDashboard';
import UserList from './components/UserList';
import Themes from './components/ThemeList';
import ThemeSettings from './components/ThemeSettingsList';
import CompanyInfoList from './components/CompanyInfoList';
import WebHeadingList from './components/WebHeadingList';
import SectionContentList from './components/SectionContentList';
import AddUserForm from './components/AddUserForm';

const ProtectedRoute = ({ element, userRole, requiredRole }) => {
    if (userRole !== requiredRole) {
        return <Navigate to="/" />;
    }
    return element;
};

const App = () => {
    const userRole = "Admin"; // This should come from your auth context or state

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
                
                {/* Dashboard Routes */}
                <Route path="/superadmin-dashboard" element={<ProtectedRoute element={<SuperadminDashboard />} userRole={userRole} requiredRole="Superadmin" />} />
                <Route path="/admin-dashboard" element={<ProtectedRoute element={<AdminDashboard />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/editor-dashboard" element={<ProtectedRoute element={<EditorDashboard />} userRole={userRole} requiredRole="Editor" />} />

                {/* Management Routes */}
                <Route path="/user-list" element={<ProtectedRoute element={<UserList />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/themes" element={<ProtectedRoute element={<Themes />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/theme-settings" element={<ProtectedRoute element={<ThemeSettings />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/company-info" element={<ProtectedRoute element={<CompanyInfoList />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/web-heading" element={<ProtectedRoute element={<WebHeadingList />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/section-content" element={<ProtectedRoute element={<SectionContentList />} userRole={userRole} requiredRole="Admin" />} />
                <Route path="/add-user" element={<ProtectedRoute element={<AddUserForm />} userRole={userRole} requiredRole="Admin" />} /> {/* Add route for the AddUserForm */}
            </Routes>
        </Router>
    );
};

export default App;
