import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/LogoPetner.png"
import { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

    const handleMenuClick = (e) => {
        if (e.key === 'logout') {
            console.log('Log Out clicked');
        } else if (e.key === 'settings') {
            console.log('Settings clicked');
        }
        setVisible(false);
    };

    const handleVisibleChange = flag => {
        setVisible(flag);
    };

    const menu = (
        <Menu onClick={handleMenuClick} style={{background:"aliceblue"}}>
            <Menu.Item key="settings" icon={<SettingOutlined />} style={{color:"#001f3f"}}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} style={{color:"#001f3f"}}>
                Log Out
            </Menu.Item>
        </Menu>
    );
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
        {/* <li><Link to="/login"><button className="btn">Login</button></Link></li> */}
        <li><Dropdown 
            overlay={menu} 
            onVisibleChange={handleVisibleChange} 
            visible={visible}
            trigger={['click']}
        >
            <button className="btn">
                Linh Nguyen
            </button>
        </Dropdown></li>
      </ul>
    </nav>
  )
}

export default Navbar
