import React from 'react';

import "./work.css";
import payment from "../../assets/defaultpayment.jpeg";
import spotify from "../../assets/spotify.png"
import churn from "../../assets/customerchurn.jpeg";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';



const Projects = () => {
  return (
    <motion.section 
    initial = {{opacity: 0, y:'50%'}}
    animate = {{opacity: 1, y: 0}}
    exit = {{ opacity: 0, y:'-50%' }}
    transition={{transition: transition1, duration:1}}
    className='section' >

      <div className="works" id="projects">
        <motion.h2
        initial = {{opacity: 0, y:'100%'}}
        animate = {{opacity: 1, y: 0}}
        exit = {{ opacity: 0, y:'-100%' }}
        transition={transition1}
        className="section__title works__title">Projects</motion.h2>

        <motion.span
        initial = {{opacity: 0, y:'100%'}}
        animate = {{opacity: 1, y: 0}}
        exit = {{ opacity: 0, y:'-100%' }}
        transition={transition1}
         className="section__subtitle"> 
          <p className="works__resume">
            Past and Upcoming Works
          </p>
        </motion.span>

        <div className="works__container">

          <motion.button
          initial = {{scale:0.2}}
          animate = {{scale:1}}
          exit = {{ scale:0}}
          
           className="works__one button button__one">
            <a href="https://github.com/thisissteff/credit_risk_analysis">
              <img src={payment} alt="" className="payment__img" />
              <h3 className="works__one__name">Customer Default Prediction</h3>
            </a>
            <p className="works__one__content">
              Machine Learning project with 2 other members to predict if whether customers 
            will default their payments based on past data.</p>
          </motion.button>

          <motion.button
          initial = {{scale:0.2}}
          animate = {{scale:1}}
          exit = {{ scale:0}}
           className="works__two button button__two" >
            <a href="https://github.com/thisissteff/customer_churn_prediction">
              <img src={churn} alt="" className="churn__img" />
              <h3 className="works__two__name">Customer Churn Prediction</h3>
            </a>
            <p className="works__two__content">Machine Learning project to identify and predict churn of customers 
            based on behaviour features.</p>
          </motion.button>

          <motion.button
          initial = {{scale:0.2}}
          animate = {{scale:1}}
          exit = {{ scale:0}}
           className="works__three button button__three">
            <div >
              <img src={spotify} alt="" className="spotify__img" />
              <h3 className="works__three__name">Get Wrapped Right Now</h3>
            </div>
            <p className="works__three__content">
              *IN PROGRESS*<br /> Why wait till the end of the year when 
              you can get your Spotify Wrapped now? </p>

            
          </motion.button>


        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
