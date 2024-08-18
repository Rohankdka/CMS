import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages/components
import Login from './assets/pages/Login';
import ForgotPassword from './assets/pages/ForgotPassword';
import ChangePassword from './assets/pages/ChangePassword';
import UserList from './assets/pages/UserList';

// Add other imports as needed

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path='/userlist' element={<UserList/>}/>
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
