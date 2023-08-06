import React from "react";

import Home from '../Home/Home';
import About from '../About/About';
import School from  '../School/School';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';



const AnimRoutes = () => {
    const location = useLocation();
    return  (
        <AnimatePresence initial = {true} mode = 'wait'>
            <Routes key = {location.pathname} location = {location}>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/resume' element={<School/>} />
                <Route path='/projects' element={<Work/>} />
                <Route path='/contact' element={<Contact/>} />
                
            </Routes>

        </AnimatePresence>
        

    )
}

export default AnimRoutes;