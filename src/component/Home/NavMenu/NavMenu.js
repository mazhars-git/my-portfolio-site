import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container main-menu">
                    <a className="navbar-brand" href="#"><span className="logo">MAZ<span className="text-dark">HAR</span></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mr-3">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#project">Portfolio</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;