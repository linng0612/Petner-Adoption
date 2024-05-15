
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
      <img src={logo} alt = "" className="logo"/> 
      </Link>
      
      <ul>
      <li><Link to="/">Home</Link></li>     
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login"><button className="btn">Login</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

