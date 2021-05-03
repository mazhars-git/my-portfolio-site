import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="container-fluid d-flex justify-content-around footer-area">
            <div>
                <p>Copyright &copy; {new Date().getFullYear()} Mazhar. All Right Reserved</p>
            </div>
            <div>
                <p>Designed by Mazhar</p>
            </div>
            
        </section>
    );
};

export default Footer;