import React from 'react';
import projectImg from '../../../images/features.png';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const Projects = () => {
    const projectsInfo=[
        {
            img: projectImg,
            title: 'Hello Plumber'
        },
        {
            img: projectImg,
            title: 'O-Mega Shop'
        },
        {
            img: projectImg,
            title: 'Desh Riders'
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