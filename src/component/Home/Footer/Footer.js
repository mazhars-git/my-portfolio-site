import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="container-fluid d-flex justify-content-around footer-area">
            <div>
                <p>Copyright &copy; {new Date().getFullYear()} Mazhar. <span style={{color: '#ff6347'}}>All Right Reserved</span></p>
            </div>
            <div>
                <p>Designed by <span style={{color: '#ff6347'}}>Mazhar</span></p>
            </div>
            
        </section>
    );
};

export default Footer;