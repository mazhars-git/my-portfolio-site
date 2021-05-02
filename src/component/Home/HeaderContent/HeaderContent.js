import React from 'react';
import profile from '../../../images/profile.png';

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Hi! I AM MAZHAR</h3>
                    <h1>Full Stack Web Developer.</h1>
                    <button className="btn btn-info">Learn More</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={profile} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;