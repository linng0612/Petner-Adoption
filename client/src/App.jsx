
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useAuth } from './Contexts/AuthContext';
import './App.css';


const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        
        <Route path="/login" element={ !isAuthenticated ? <Login /> :<Navigate to ="/"/>} />
        <Route path="/register" element={ !isAuthenticated ? <Register /> : <Navigate to ="/"/>} />
        
        </Routes>

    </Router>
  );
}

export default App;


