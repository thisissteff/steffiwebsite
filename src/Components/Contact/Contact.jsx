import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nv4h3ms', 
    'template_5cyl6jk', 
    form.current, 
    'l7np8Ia1ukFcwJQ7Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
  };

  return (
    <motion.div 
    initial = {{opacity: 0, y:'50%'}}
    animate = {{opacity: 1, y: 0}}
    exit = {{ opacity: 0, y:'-50%' }}
    transition={{transition: transition1, duration:1}}
    className="contact" id="contacts">

      <motion.h2
       initial = {{opacity: 0, y:'100%'}}
       animate = {{opacity: 1, y: 0}}
       exit = {{ opacity: 0, y:'-100%' }}
       transition={transition1}
       className="section__title contact__title">Get in touch</motion.h2>
      <motion.span
      initial = {{opacity: 0, y:'100%'}}
      animate = {{opacity: 1, y: 0}}
      exit = {{ opacity: 0, y:'-100%' }}
      transition={transition1}
       className="section__subtitle"> 
        <p className="contact__subtitle">
          Contact Me!
        </p>
      </motion.span>

      <motion.div
      initial = {{scale:0.2}}
      animate = {{scale:1}}
      exit = {{ scale:0}}
      transition={{transition: transition1, duration:1.2}}
       className="contact__container">
        <form form ref={form} onSubmit={sendEmail}
        className="contact__form">
          <div className="contact__form-div">
            <label className="contact__form-tag">Name</label>
            <input type="text" 
            name="name" 
            className="contact__form-input"
            placeholder="What's your name?" />
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag">Mail</label>
            <input type="email" 
            name="email" 
            className="contact__form-input"
            placeholder="What's your email?" />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Message</label>
            <textarea name="message"  cols="30" rows="10"
            className="contact__form-input" placeholder="What do you want to say?"></textarea>
          </div>

          <button className="button contact__button button--flex">
            Send!
            <i class="uil uil-fast-mail contact__icon"></i>
          </button>
        </form>

        
      </motion.div>


    </motion.div>
  );
};

export default Contact;
