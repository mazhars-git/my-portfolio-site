import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({project}) => {
    return (
        <div className="col-md-4 text-center">
           <div className="project-content">
                <div className="project-box">
                    <img className="img-fluid project-img" src={project.img} alt=""/>
                    <div className="project-btn">
                        <button className="btn btn-info"><a className="link-style" href={project.link} target="_blank">Live Preview</a></button>
                    </div>
                </div>
                <h4 className="pt-3">{project.title}</h4>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectInfo;