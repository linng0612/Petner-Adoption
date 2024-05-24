import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/LogoPetner.png";
import { Menu, Dropdown } from 'antd';
import { SettingOutlined, LogoutOutlined, FileOutlined, HistoryOutlined } from '@ant-design/icons';
import { useAuth } from "../../Contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isAuthenticated, userData, logout } = useAuth();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    setVisible(false);
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = (
    <Menu onClick={handleMenuClick} style={{ background: "aliceblue" }}>
      <Menu.Item key="application" icon={<FileOutlined />} style={{ color: "#001f3f" }}>
        Manage Application
      </Menu.Item>
      <Menu.Item key="history" icon={<HistoryOutlined />} style={{ color: "#001f3f" }}>
        Donate History
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />} style={{ color: "#001f3f" }}>
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
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <div className="menu-icons" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className={menuOpen ? 'hide' : ''} />
        <FontAwesomeIcon icon={faTimes} className={menuOpen ? '' : 'hide'} />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/adopt" onClick={toggleMenu}>Adopt</Link></li>
        <li><Link to="/donate" onClick={toggleMenu}>Donate</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>

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
          <Link to="/login" className="home-btn" onClick={toggleMenu}>Login</Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
