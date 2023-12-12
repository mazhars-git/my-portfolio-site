import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({project}) => {
    return (
        <div className="col-md-4 text-center">
           <div className="project-content">
                <div className="project-box">
                   <div className="screen">
                        <img className="img-fluid project-img" src={project.img} alt=""/>
                   </div>            

                    <div className="project-btn">
                        <button className="btn btn-project"><a className="link-style" href={project.link} target="_blank">Preview</a></button>
                    </div>
                </div>
                <h4 className="pt-3">{project.title}</h4>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectInfo;