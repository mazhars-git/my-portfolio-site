import React from 'react';
import profile from '../../../images/profile.png';

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h3>Hi! I AM MAZHAR</h3>
                    <h1 className="py-3">Full Stack Web Developer.</h1>
                    <button className="btn btn-info"><a className="link-style" href="#about">ABOUT ME</a></button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={profile} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;