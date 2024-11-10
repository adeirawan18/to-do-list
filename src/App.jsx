import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TaskPage from './pages/Task';
import EditeProfile from './pages/EditeProfile'; 
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); 
  };

  const handleSignOut = () => {
    setUser(null); 
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser({
      ...user,
      ...updatedUser,
    }); 
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
