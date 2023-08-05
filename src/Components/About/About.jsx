import React from 'react';
import "./about.css";
import AboutImg from "../../assets/steffi.jpg";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const About = () => {
  return (
    <motion.section 
    initial = {{opacity: 0, y:'50%'}}
    animate = {{opacity: 1, y: 0}}
    exit = {{ opacity: 0,  y:'100%'}}
    transition={{transition1, duration: 1.5}}
    className='section'>

    <div className="about__section" id="about" >
        <motion.h2 
        initial = {{ y:'100%'}}
        animate = {{y: 0}}
        exit = {{ y:'-100%' }}
        transition={transition1}
         className="section__title about__title">About Me</motion.h2>
        
        <div className="about__content grid-container">
          
          <img src={AboutImg} alt="" className="about__img" />
          
          <motion.div 
          initial = {{ y:'100%'}}
          animate = {{y: 0}}
          exit = {{ y:'-100%' }}
          transition={{transition: transition1, duration: 1.5}}
           className="about__data">
            <p className="about__description">
              Welcome to my webpage! My name is Steffi Lim, 
              and I am currently a Penultimate Business Analytics student at 
              National University of Singapore (NUS). I am thrilled to use this 
              platform to share with you the exciting projects I have had the 
              opportunity to work on so far. Stay tuned for more updates and insights 
              into my journey in the world of Business Analytics!
            </p>

            <h3 className="social__name">Check out my other interests!</h3>

            <div className="social__container">
              
              <button className="social__one social__button">
                <a href="https://github.com/thisissteff?tab=repositories"
                 style={{ color: 'whitesmoke'}} >
                  <i class="uil uil-robot social__icon"></i>
                  Technology
                </a>
              </button>

              <button className="social__two social__button " >
                <a href="https://www.instagram.com/myfilmregurgitation/" 
                style={{ color: 'whitesmoke'}}>
                  <i class="uil uil-film social__icon"></i>
                  Film Photography
                </a>
                
              </button>

              <button className="social__three social__button">
                <a href="https://www.lemon8-app.com/steffffilim?region=sg" 
                style={{ color: 'whitesmoke'}}>
                  <i class="uil uil-comment-heart social__icon"></i>
                  Content Creation
                </a>

                
              </button>


            </div>
      
            
          </motion.div>
        </div>

    </div>


    </motion.section>

    
  );
};

export default About;
