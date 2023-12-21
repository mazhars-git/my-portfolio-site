import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Typical from 'react-typical';
import profile from '../../../images/profile.png';
import '../../Home/Contact/Contact.css';
import './HeaderContent.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row header-content">
                <div className="col-md-6 align-self-center pt-3">
                    <h3 className="pb-3" style={{ color: 'tomato' }}>Hi! I AM MAZHAR</h3>
                    <Typical
                        steps={['Full Stack Web Developer', 1000, 'JavaScript Developer', 800, 'React Developer', 800, 'MERN Stack Developer', 500]}
                        loop={Infinity}
                        wrapper="h1"
                    />
                    <br />

                    <button className="btn-brand">
                        <a className="link-style noSelect" href="#about">
                            About Me
                        </a>
                    </button>
                    <div className="social-icon pt-4">
                        <ul>
                            <li> <a target="_blank" href="https://github.com/mazhars-git"><FontAwesomeIcon className="sIcon" icon={faGithub} /></a> </li>
                            <li> <a target="_blank" href="https://www.linkedin.com/in/md-mazharul-islam-15b31618a/"><FontAwesomeIcon className="sIcon" icon={faLinkedin} /></a> </li>
                            <li> <a target="_blank" href="https://www.facebook.com/noman.abdullah.71619/"><FontAwesomeIcon className="sIcon" icon={faFacebook} /></a> </li>
                            <li> <a target="_blank" href="https://www.instagram.com/mazhar.in/"><FontAwesomeIcon className="sIcon" icon={faInstagram} /></a> </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="col-md-6 py-4"
                >
                    <img className="img-fluid" src={profile} alt="profile-pic" />
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;