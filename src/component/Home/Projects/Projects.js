import React from 'react';
import projectImg from '../../../images/hello-plumber.png';
import projectImg_2 from '../../../images/red-onion.png';
import projectImg_3 from '../../../images/genius-car.png';
import projectImg_4 from '../../../images/fundu.png';
import projectImg_5 from '../../../images/weDo.png';
import projectImg_6 from '../../../images/pti.png';
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
            img: projectImg_2,
            title: 'Bengal Dish',
            description: 'This is a simple restaurant web site. Here is designed some pages. Using Home page you can order any dish item.',
            link: 'https://bengal-dish-project.web.app/'
        },
        {
            img: projectImg_3,
            title: 'Genius Car',
            description: 'This is a car servicing web site. In this site you can order any service. You can set add or delete item.',
            link: 'https://genius-car-c1ad8.web.app/'
        },
        {
            img: projectImg_4,
            title: 'Fundu Website',
            description: 'This is a car servicing web site. In this site you can order any service. You can set add or delete item.',
            link: 'https://fundu-web.netlify.app/'
        },
        {
            img: projectImg_5,
            title: 'We Do',
            description: 'This is a web site. In this site you can see the company services and details. You can contact and see the many features.',
            link: 'https://zealous-haibt-4323d4.netlify.app/'
        },
        {
            img: projectImg_6,
            title: 'pti app',
            description: 'This is a web site. This is restaurant website. Here you can see the latest items of meal menu. It is responsive also.',
            link: 'https://resplendent-dieffenbachia-a9779d.netlify.app/'
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