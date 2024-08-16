import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CMSLayout from './assets/Layout/CMSLayout';
import './styles/themes.css';

// Import pages/components
import Login from './assets/pages/Login';
import ForgotPassword from './assets/pages/ForgotPassword';
import ChangePassword from './assets/pages/ChangePassword';
import UserList from './assets/pages/UserList';
import ThemeSettings from './assets/pages/ThemeSettings';
import Themes from './assets/pages/Themes';
// Add other imports as needed

const App = () => {
  return (
    <Router>
      <CMSLayout>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/themes' element={<Themes/>}/>
          <Route path='themesettings' element={<ThemeSettings/>}/>
          {/* Define other routes as needed */}
        </Routes>
      </div>
      </CMSLayout>
    </Router>
  );
};

export default App;
