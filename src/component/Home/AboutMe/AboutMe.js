import React from 'react';
import profileImg from '../../../images/mazhar.png';

const AboutMe = () => {
    return (
        <section className="container p-5">
            <h6 className="text-center">Get to know me!</h6>
            <h1 className="text-center">About Me</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={profileImg} alt=""/>
                </div>
                <div className="col-md-6 align-self-center pl-5">
                    <h4>Who am I?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti omnis ducimus mollitia molestiae ratione officia maxime esse illo quidem sunt, eos vel repudiandae dolor cupiditate, labore voluptatum exercitationem incidunt.</p>

                    <button className="btn btn-info">Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;