import React from 'react';
import profileImg from '../../../images/mazhar.png';

const AboutMe = () => {
    return (
        <section id="about" className="container py-4">
            <h6 className="text-center mt-5">Get To Know Me!</h6>
            <h1 className="text-brand">About Me</h1>
            <div className="row">
                <div
                    className="col-md-6">
                    <img className="img-fluid" src={profileImg} alt=""/>
                </div>
                <div className="col-md-6 align-self-center pl-5">
                    <h4 className="py-2">Who am I?</h4>
                    <p className="pb-3 fst-normal lh-base">I am a professional MERN Stack developer. I have completed more then 25 projects on programming sector. I am good at HTML, CSS, JavaScript, React, Bootstrap, Tailwind,etc. I can design and develop any kind of web site with responsive.</p>

                    <button className="btn-brand"><a className="link-style" href="https://drive.google.com/file/d/1zBJQ5At9bR30qYOxlnjMrGwLaVzEIVSG/view?usp=sharing" target="_blank">My Resume</a></button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;