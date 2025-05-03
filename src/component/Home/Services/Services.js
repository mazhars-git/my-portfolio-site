import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faDesktop,
  faMobileAlt,
  faPencilRuler,
  faSearchDollar,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const serviceInfo = [
    {
      img: faDesktop,
      title: "Web Design",
      details:
        "To design your personal, company or agency web site you can hire me. ",
    },
    {
      img: faPencilRuler,
      title: "Web Development",
      details:
        "To develop your personal, company or agency web site you can hire me. ",
    },
    {
      img: faMobileAlt,
      title: "Responsive Design",
      details:
        "Designed website will be fully responsive for all kind of Devices. ",
    },
    {
      img: faSearchDollar,
      title: "Digital Marketing",
      details:
        "For Social media marketing and other digital marketing you can ask me. ",
    },
    {
      img: faCog,
      title: "SEO Friendly",
      details:
        "I can design and develop your site SEO friendly. It will be rank your site.  ",
    },
    {
      img: faUserCheck,
      title: "24/Support",
      details:
        "I am always available. So you will get 24 hour support easily. ",
    },
  ];
  return (
    <section id="services" className="container py-5">
      <h6 className="text-center mt-5">Get To Know My Services!</h6>
      <h2 className="text-brand pb-4">Services</h2>
      <div className="row">
        {serviceInfo.map((service) => (
          <ServiceDetails service={service} key={service.id}></ServiceDetails>
        ))}
      </div>
    </section>
  );
};

export default Services;
