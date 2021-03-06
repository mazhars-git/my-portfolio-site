import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MySkill from '../MySkill/MySkill';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section id="home" className="home-section bg-color">
            <Header></Header>
            <AboutMe></AboutMe>
            <MySkill></MySkill>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;