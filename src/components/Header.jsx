import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="s#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
