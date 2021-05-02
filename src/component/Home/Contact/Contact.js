import { faEnvelope, faHome, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="text-center">Address</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faEnvelope} /> mazharulislam611@gmail.com</li>
                        <li> <FontAwesomeIcon icon={faPhone} /> +880 1309 075 511</li>
                        <li> <FontAwesomeIcon icon={faHome} /> Dhaka, Bangladesh</li>
                    </ul>

                </div>
                <div className="col-md-8">
                    <h3 className="text-center">Get in touch</h3>

                </div>
            </div>
        </section>
    );
};

export default Contact;