
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useAuth } from './Contexts/AuthContext';
import './App.css';
import DonateCancle from './Components/Donate/DonateCancle';
import DonateSuccess from './Components/Donate/DonateSuccess';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donate/cancel" element={<DonateCancle/>}/>
        <Route path="/donate/success" element={<DonateSuccess/>}/>
        {/* <Route path="/login" element={ !isAuthenticated ? <Login /> :<Navigate to ="/"/>} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={ !isAuthenticated ? <Register /> : <Navigate to ="/"/>} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


