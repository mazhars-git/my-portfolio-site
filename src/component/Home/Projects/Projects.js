import React from "react";
import projectImg from "../../../images/hello-plumber.png";
import projectImg_2 from "../../../images/red-onion.png";
import projectImg_3 from "../../../images/genius-car.png";
import projectImg_4 from "../../../images/fundu.png";
import projectImg_5 from "../../../images/weDo.png";
import projectImg_6 from "../../../images/pti.png";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

const Projects = () => {
  const projectsInfo = [
    {
      img: "https://i.ibb.co.com/FLBK4Y1c/my-nextjs.png",
      title: "AdolBodol",
      description:
        "This is a e-commerce web site. Where any use can by any used or new product. Also a use can sell his product. Actually this is a group project. In this project we used Nextjs, react, tailwind, node, express, mongodb, shorjopay, etc.",
      link: "https://adol-bodon-frontend.vercel.app/",
    },
    {
      img: projectImg,
      title: "Hello Plumber",
      description:
        "This is a plumber service web site. There are more then 6 pages. In this site you can order any service. In this project I used bootstrap, react, node, express, mongoDB, etc",
      link: "https://hello-plumber-project.web.app/",
    },
    {
      img: projectImg_2,
      title: "Bengal Dish",
      description:
        "This is a simple restaurant web site. Here is designed some pages. A user can see the menu and also place order. Using Home page you can order any dish item. Here I used MUI, React, Node, express, MongoDB, etc.",
      link: "https://bengal-dish-project.web.app/",
    },
    {
      img: projectImg_3,
      title: "Genius Car",
      description:
        "This is a car servicing web site. In this site you can order any service. You can set add or delete item.",
      link: "https://genius-car-c1ad8.web.app/",
    },
    {
      img: projectImg_4,
      title: "Fundu Website",
      description:
        "This is a car servicing web site. In this site you can order any service. You can set add or delete item.",
      link: "https://fundu-web.netlify.app/",
    },
    {
      img: projectImg_5,
      title: "We Do",
      description:
        "This is a web site. In this site you can see the company services and details. You can contact and see the many features.",
      link: "https://zealous-haibt-4323d4.netlify.app/",
    },
    {
      img: projectImg_6,
      title: "pti app",
      description:
        "This is a web site. This is restaurant website. Here you can see the latest items of meal menu. It is responsive also.",
      link: "https://resplendent-dieffenbachia-a9779d.netlify.app/",
    },
  ];
  return (
    <section id="project" className="container py-5">
      <p className="text-center p-0 m-0">Portfolio</p>
      <h2 className="text-brand">My Projects</h2>
      <div className="row py-5">
        {projectsInfo.slice(0, 3).map((project) => (
          <ProjectInfo project={project}></ProjectInfo>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary">All Projects</button>
      </div>
    </section>
  );
};

export default Projects;
