import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlogDetails = ({ blog }) => {
  return (
    <div className="col-md-4 p-0">
      <div className="service-info">
        <div className="service-box p-3">
          <img className="img-fluid" src={blog.imageUrl} alt="blog img" />
          <p>
            <FontAwesomeIcon className="icon" icon={blog.img} />
          </p>
          <h3 className="my-3">{blog.title}</h3>
          <p>{blog.summary}</p>
          <button className="btn btn-success">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
