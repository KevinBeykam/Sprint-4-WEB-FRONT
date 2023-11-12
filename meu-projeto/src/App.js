import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css'; 
import './Footer.scss';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home user={user} />} />
        <Route
          path="/"
          element={<Login onLogin={handleLogin} onLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
