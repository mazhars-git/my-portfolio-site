import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 p-0">
            <div className="service-info">
                <div className="service-box py-3">
                    <p><FontAwesomeIcon className="icon" icon={service.img} /></p>
                    <h3 className="my-3">{service.title}</h3>
                    <p>{service.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;