
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useAuth } from './Contexts/AuthContext';
import './App.css';
import Donatepage from './Pages/Donatepage/Donatepage';
import DonateCancle from './Components/Donate/DonateCancle';
import DonateSuccess from './Components/Donate/DonateSuccess';
import Contact from './Components/Contact/Contact';
import AdoptPage from './Pages/Adoptpage/Adoptpage';
import AdoptDetail from './Components/AdoptDetail/AdoptDetail';
import AdoptApplication from './Components/AdoptApplication/AdoptApplication';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path ="/donate" element={<Donatepage/>}/>
        <Route path="/donate/cancel" element={<DonateCancle/>}/>
        <Route path="/donate/success" element={<DonateSuccess/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/adopt" element={<AdoptPage/>}/>
        <Route path="/adopt/detail/:id" element={<AdoptDetail/>}/>
        <Route path="/adopt/detail/:id/application-form" element={<AdoptApplication/>}/>
        {/* <Route path="/login" element={ !isAuthenticated ? <Login /> :<Navigate to ="/"/>} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={ !isAuthenticated ? <Register /> : <Navigate to ="/"/>} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


