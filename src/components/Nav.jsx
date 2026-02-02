import React from 'react'
import "./nav.scss";
import DateTime from './DateTime';

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./Navbar-icons/apple.svg" alt="apple-icon" />
            </div>
            <div className="nav-item">
                <p>Akshat Sisodia</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-item">
                <img src="./Navbar-icons/wifi.svg" alt="wifi-icon" />
            </div>
            <DateTime/>
        </div>
    </nav>
  )
}

export default Nav