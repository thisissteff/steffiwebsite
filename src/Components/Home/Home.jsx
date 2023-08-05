import React from 'react';
import './home.css';
import ScrollDown from './ScrollDown';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';



const Home = () => {
  return (
    <motion.section 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{ opacity: 0}}
   
    className='section'>
      <div
      transition={transition1}
      className="home__container" id="home">

          <div className="home__content">

              <motion.h1 
              initial = {{opacity: 0, y:'60%'}}
              animate = {{opacity: 1, y:0}}
              exit = {{ opacity: 0, y:'-50%'}}
              transition={{transition: transition1, duration:1}}
              className="home__title">
              Who is she?
              </motion.h1>
              
              <ScrollDown />
          </div>
          

          <motion.div
          initial = {{scale:0.2}}
          animate = {{scale:1}}
          exit = {{ scale:0}}
          transition={{transition: transition1, duration:1.25}}
          className="home__image"></motion.div>
          
          
      </div>
    </motion.section>
  )
};

export default Home;