// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TaskPage from './pages/Task';
import EditeProfile from './pages/EditeProfile'; // Import halaman EditProfile
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // Set user ketika login berhasil
  };

  const handleSignOut = () => {
    setUser(null); // Set user menjadi null ketika logout
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser({
      ...user,
      ...updatedUser,
    }); // Update profil user
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <TaskPage user={user} onSignOut={handleSignOut} /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/edit-profile"
          element={<EditeProfile user={user} onUpdateProfile={handleUpdateProfile} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
