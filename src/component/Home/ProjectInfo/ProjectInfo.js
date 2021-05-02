import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({project}) => {
    return (
        <div className="col-md-4 project-box">
            <img className="img-fluid project-img" src={project.img} alt=""/>
            <div className="project-btn">
                <button className="btn btn-info"><a href={project.link} target="_blank">Live Preview</a></button>
            </div>
        </div>
    );
};

export default ProjectInfo;