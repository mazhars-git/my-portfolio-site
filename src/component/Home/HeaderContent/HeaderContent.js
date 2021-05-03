import React from 'react';
import Typical from 'react-typical';
import profile from '../../../images/profile.png';

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row pt-5">
                <div className="col-md-6 align-self-center">
                    <h3 className="pb-3" style={{color: 'tomato'}}>Hi! I AM MAZHAR</h3>
                    <Typical
                        steps={['Full Stack Web Developer', 1000, 'React Developer', 500, 'JavaScript Developer', 500]}
                        loop={Infinity}
                        wrapper="h1"
                    />
                    <br/>

                    <button className="btn-brand">
                        <a className="link-style noSelect" href="#about">
                            ABOUT ME
                        </a>
                    </button>
                </div>
                <div className="col-md-6 pt-4">
                    <img className="img-fluid" src={profile} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;