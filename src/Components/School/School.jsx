import React from 'react';
import "./school.css";
import CV from "../../assets/STEFFI_LIM_CV.pdf";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const School = () => {
  return (
    <motion.section
    initial = {{opacity: 0, y:'50%'}}
    animate = {{opacity: 1, y: 0}}
    exit = {{ opacity: 0, y:'-50%' }}
    transition={{transition: transition1, duration:1}}
     className="qualification" id="resume">

      <motion.h2
      initial = {{opacity: 0, y:'100%'}}
      animate = {{opacity: 1, y: 0}}
      exit = {{ opacity: 0, y:'-100%' }}
      transition={transition1}
       className="section__title qualification__title"> Resume</motion.h2>

      <motion.span
      initial = {{opacity: 0, y:'100%'}}
      animate = {{opacity: 1, y: 0}}
      exit = {{ opacity: 0, y:'-100%' }}
      transition={transition1}
       className="section__subtitle"> 
        <a download="" href={CV} className="qualification__resume" >
          Click<em> here</em> to download!
          <i class="uil uil-file-landscape-alt about__icon"></i>
        </a>
      </motion.span>

      <div className="qualification__container">
        
          <div className="qualification__summary">
            <h3 className="summary__title">Contact</h3>
            <div className="summary__timeline">
              <div className="summary__content">
                <div>
                  <h3 className="summary__name">STEFFI LIM</h3>
                  <p className="summary__subtitle"><em>A highly driven, motivated 
                    and passionate individual</em></p>
                  <ul class="summary__list">
                    <li>Email: steffilimenqi@outlook.com</li>
                    <li>Singapore</li>
                  </ul>
                </div>
              </div>
            </div>
            
            
            
          </div>

          <div className="qualification__school">
            <h3 className="school__title">Education</h3>
            <div className="school__timeline">
              <div className="school__content">
                <div>
                  <h3 className="school__degree">BACHELORS OF SCIENCE IN 
                  BUSINESS ANALYTICS</h3>

                  <p className="school__year">
                   
                      <i className="uil uil-calendar-alt school__icon"></i>
                      2021 - 2025
                    
                  </p>


                  <p className="school__name">
                    National University of Singapore (NUS), Singapore
                  </p>

                  <p className="school__spec">
                    <em>Specialisation in Financial Analytics</em>
                  </p>
                  
                  
                </div>
              </div>
            </div>

          </div>

          
          <div className="qualification__exp">
            <h3 className="exp__title">Experience</h3>
            <div className="exp__timeline">
              <div className="exp__content">
                <div>
                  <h3 className="exp__position">DATA ANALYST</h3>

                  <p className="exp__year">
                   
                      <i className="uil uil-calendar-alt school__icon"></i>
                      MAY 2023 - JULY 2023
                    
                  </p>


                  <p className="exp__name">
                    Land Transport Authority (LTA), Singapore, SG
                  </p>

                  <ul class="exp__list">
                    <li>Conducted analysis on commuter churn following the opening of Thomson East Coast Line phase 3.</li>
                    <li>Utilized Pandas and SQL to process extensive datasets consisting of over 30 million rows.</li>
                    <li>Developed and implemented a dashboard for efficient visualization of commuter travel changes, aiding in future planning efforts.</li>
                  </ul>

                  
                  
                  
                </div>
              </div>
            </div>

          </div>

          <div className="qualification__leader">
            <h3 className="leader__title">Leadership</h3>
            <div className="leader__timeline">
              <div className="leader__content">
                <div>
                  <h3 className="leader__position">SECTION LEADER</h3>

                  <p className="leader__year">
                   
                      <i className="uil uil-calendar-alt school__icon"></i>
                      AUG 2021 - MAY 2022
                    
                  </p>


                  <p className="leader__name">
                    <em>Temasek Hall</em>
                  </p>

                  <ul class="leader__list">
                    <li>Conducted and led sectionals with the Alto group of up to 15 people</li>
                    <li>Partnered with the Publicity Team to devise and execute marketing strategies for yearly performance</li>

                  </ul>

                </div>

                <div>
                <h3 className="leader__position">EVENT COORDINATOR</h3>
                <p className="leader__year">
                
                    <i className="uil uil-calendar-alt school__icon"></i>
                    JUN 2019 - JAN 2020
                  
                </p>


                <p className="leader__name">
                  <em>Singapore Association for Mental Health (SAMH)</em>
                </p>

                <ul class="leader__list">
                  <li>Led a team of 5 members in the planning and 
                    successful execution of Exchange day for up to 80 participants.</li>
                  

                </ul>

                </div>


              </div>
            </div>

          </div>

        
      </div>

      

      

      

    </motion.section>
      
      
  );
};

export default School;
