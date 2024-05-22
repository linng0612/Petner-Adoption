import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/LogoPetner.png"
import { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { SettingOutlined, LogoutOutlined , FileOutlined, HistoryOutlined} from '@ant-design/icons';
import {useAuth} from "../../Contexts/AuthContext";

const Navbar = () => {
    const {isAuthenticated,userData,logout} =useAuth();
    const [visible, setVisible] = useState(false);

    const handleMenuClick = (e) => {
        setVisible(false);
    };

    const handleVisibleChange = flag => {
        setVisible(flag);
    };

    const handleLogout = () => {
        logout();
    };

    const menu = (
        <Menu onClick={handleMenuClick} style={{background:"aliceblue"}}>
            <Menu.Item key="application" icon={<FileOutlined />} style={{color:"#001f3f"}}>
                Manage Application
            </Menu.Item>
            <Menu.Item key="history" icon={<HistoryOutlined />} style={{color:"#001f3f"}}>
                Donate History
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />} style={{color:"#001f3f"}}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} style={{ color: "#001f3f" }} onClick={handleLogout}>
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

        {isAuthenticated ? (
          <Dropdown 
            overlay={menu} 
            onVisibleChange={handleVisibleChange} 
            visible={visible}
            trigger={['click']}
          >
            <button className="btn">
              {userData.name}
            </button>
          </Dropdown>
          ) : (
            <Link to="/login" className="btn">Login</Link>
          )}
      </ul>
    </nav>
  )
}

export default Navbar
