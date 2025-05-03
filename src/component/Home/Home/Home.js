import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MySkill from "../MySkill/MySkill";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import HeaderContent from "../HeaderContent/HeaderContent";
import NavMenu from "../NavMenu/NavMenu";
import MySkills from "../MySkill/MySkills";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <section id="home" className="home-section bg-color">
      <NavMenu />
      <HeaderContent />
      <AboutMe></AboutMe>
      <MySkills />
      <Services></Services>
      <Projects></Projects>
      <Blog />
      <Contact></Contact>
      <Footer></Footer>
    </section>
  );
};

export default Home;
