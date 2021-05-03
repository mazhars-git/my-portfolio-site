import React from 'react';
import projectImg from '../../../images/plumber copy.png';
import projectImg_2 from '../../../images/OmegaShop.jpg';
import projectImg_3 from '../../../images/Riders.jpg';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const Projects = () => {
    const projectsInfo=[
        {
            img: projectImg,
            title: 'Hello Plumber',
            description: 'This is a plumber service web site. There are more then 6 pages. In this site you can order any service.',
            link: 'https://hello-plumber-project.web.app/'
        },
        {
            img: projectImg_3,
            title: 'O-Mega Shop',
            description: 'This is a simple e-commerce web site. Here is designed some pages. Using Home page you can order any product.',
            link: 'https://desh-riders-app.web.app/'
        },
        {
            img: projectImg_2,
            title: 'Desh Riders',
            description: 'This is a ride sharing web site. In this site you can order any rider. You can set your destination.',
            link: 'https://o-mega-shop.web.app/'
        },
    ]
    return (
        <section id="project" className="container py-5">
            <p className="text-center p-0 m-0">Portfolio</p>
            <h2 className="text-brand">My Projects</h2> 
           <div className="row py-5">
               {
                   projectsInfo.map(project => <ProjectInfo project={project}></ProjectInfo>)
               }
           </div>
        </section>
    );
};

export default Projects;