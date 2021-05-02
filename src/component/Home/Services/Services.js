import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faDesktop, faMobileAlt, faPencilRuler, faSearchDollar, faUserCheck } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    const serviceInfo = [
        {
            img: faDesktop,
            title: "Web Design",
            details: "To design your personal, company or agency web site you can hire me. "
        },
        {
            img: faPencilRuler,
            title: "Web Development",
            details: "To design your personal, company or agency web site you can hire me. "
        },
        {
            img: faMobileAlt,
            title: "Responsive Design",
            details: "To design your personal, company or agency web site you can hire me. "
        },
        {
            img: faSearchDollar,
            title: "Digital Marketing",
            details: "To design your personal, company or agency web site you can hire me. "
        },
        {
            img: faCog,
            title: "SEO Friendly",
            details: "To design your personal, company or agency web site you can hire me. "
        },
        {
            img: faUserCheck,
            title: "24/Support",
            details: "To design your personal, company or agency web site you can hire me. "
        },
    
    ]
    return (
        <section className="container py-5">
            <h2>Services</h2>
            <div className="row">
                {
                    serviceInfo.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;