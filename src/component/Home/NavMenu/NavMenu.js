import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div class="container-fluid main-menu">
                    <a class="navbar-brand" href="#"><span className="logo">MAZHAR</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mr-3">
                            <a class="nav-link active" href="#home">Home</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#project">Portfolio</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;