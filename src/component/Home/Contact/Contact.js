import { faFacebook, faFacebookF, faGithub, faGithubAlt, faGithubSquare, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_b9sbwm1', 'template_71o3jm4', e.target, 'user_XcuLVfeiXcknkKPIsJs5U')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <section id="contact" className="container py-5">
            <p className="text-center">Feel free to contact me anytime</p>
            <h2 className="text-brand p-0 pb-5">Get in Touch</h2>
            <div className="row">
                <div className="col-md-4 contact-info pb-2">
                    <h3 className="text-medium py-2">Contact Info</h3>
                    <p className="py-2">I am always available for your service. Feel free to contact me to get best project.</p>
                    <ul>
                        <li> <FontAwesomeIcon className="icon" icon={faHome} /> Dhaka, Bangladesh</li>
                        <li> <FontAwesomeIcon className="icon" icon={faPhone} /> +880 1309 075 511</li>
                        <li> <FontAwesomeIcon className="icon" icon={faEnvelope} /> mazharulislam611@gmail.com</li>
                    </ul>
                    <div className="social-icon pt-5">
                        <ul>
                            <li> <a target="_blank" href="https://github.com/mazhars-git"><FontAwesomeIcon className="sIcon" icon={faGithub} /></a> </li>
                            <li> <a target="_blank" href="https://www.linkedin.com/in/md-mazharul-islam-15b31618a/"><FontAwesomeIcon className="sIcon" icon={faLinkedin} /></a> </li>
                            <li> <a target="_blank" href="https://www.facebook.com/noman.abdullah.71619/"><FontAwesomeIcon className="sIcon" icon={faFacebook} /></a> </li>
                            <li> <a target="_blank" href="https://www.instagram.com/mazhar.in/"><FontAwesomeIcon className="sIcon" icon={faInstagram} /></a> </li>
                        </ul>
                    </div>  
                </div>
                <div className="col-md-8">
                    <h3 className="text-medium py-2">Message Me</h3>
                    <form onSubmit={sendEmail}>
                        <input placeholder="Name" name="name" {...register("name")} />
                        <input placeholder="Email" name="email" {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <textarea placeholder="Message" name="message" {...register("message")} />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;