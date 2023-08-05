import React from 'react';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';
import { Link } from 'react-router-dom';

const ScrollDown = () => {
  return (
    <motion.div
    initial = {{opacity: 0, y:'60%'}}
              animate = {{opacity: 1, y:0}}
              exit = {{ opacity: 0, y:'-50%'}}
              transition={transition1}
       className="home__scroll">
        <Link to = "/about" className="home__scroll-button button--flex">

          <span className="home__scroll-name">Find out more!</span>
          <i className="uil uil-angle-double-right home__scroll-arrow"></i>


        </Link>

        
    </motion.div>

  );
};

export default ScrollDown;
