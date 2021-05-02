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
            link: 'https://hello-plumber-project.web.app/'
        },
        {
            img: projectImg_3,
            title: 'O-Mega Shop',
            link: 'https://desh-riders-app.web.app/'
        },
        {
            img: projectImg_2,
            title: 'Desh Riders',
            link: 'https://o-mega-shop.web.app/'
        },
    ]
    return (
        <section className="container py-5">
           <h2 className="text-center py-3">My Projects</h2> 
           <div className="row">
               {
                   projectsInfo.map(project => <ProjectInfo project={project}></ProjectInfo>)
               }
           </div>
        </section>
    );
};

export default Projects;