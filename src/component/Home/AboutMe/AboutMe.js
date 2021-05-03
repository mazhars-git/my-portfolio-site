import React from 'react';
import profileImg from '../../../images/mazhar.png';

const AboutMe = () => {
    return (
        <section id="about" className="container p-5">
            <h6 className="text-center">Get to know me!</h6>
            <h1 className="text-brand">About Me</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={profileImg} alt=""/>
                </div>
                <div className="col-md-6 align-self-center pl-5">
                    <h4 className="py-2">Who am I?</h4>
                    <p style={{fontSize: '17px', lineHeight: '30px'}}>I am a professional web developer. I have completed more then 15+ projects on programming sector. I am good at JavaScript, React and React Native. I can design and develop any kind of web site with responsive.</p>

                    <button className="btn-brand"><a className="link-style" href="https://drive.google.com/file/d/1zBJQ5At9bR30qYOxlnjMrGwLaVzEIVSG/view?usp=sharing" target="_blank">RESUME</a></button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;