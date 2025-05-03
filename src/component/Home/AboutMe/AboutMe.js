import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <section id="about" className="container py-8">
      <h6 className="text-center mt-5">Get To Know Me!</h6>
      <h1 className="text-brand mb-5">About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <h5 className="semi-heading">Educational Details:</h5>
          <p>
            I have completed my post graduation from Islamic Arabic University
            on Hadith. I have completed also Diploma in Computer Science &
            Application from Open University.
          </p>
          <h5 className="semi-heading">Working Experience:</h5>
          <p>
            I have done an Internship as a Junior Web Developer from Adwaita
            Educare, India. I have worked also in group project with my
            classmate.{" "}
          </p>
        </div>
        <div className="col-md-6 align-self-center pl-5">
          <h4 className="py-2 semi-heading">My Expertise</h4>
          <p className="pb-3 fst-normal lh-base">
            I am a professional MERN Stack Developer. I have completed more then
            25 projects with HTML, CSS, Bootstrap, Javascript, React, Nextjs,
            Node, MongoDB, Express, etc. I am good at HTML, CSS, JavaScript,
            React, Bootstrap, Tailwind, etc. I can design and develop any kind
            of web site with responsive.
          </p>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn-brand">
          <a
            className="link-style"
            href="https://drive.google.com/file/d/1zBJQ5At9bR30qYOxlnjMrGwLaVzEIVSG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
