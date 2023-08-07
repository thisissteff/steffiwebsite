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
        <AnimatePresence mode="wait">
            <Routes key = {location.pathname} location = {location}>
                <Route exact path='/steffiwebsite' element={<Home/>} />
                <Route path='/steffiwebsite/about' element={<About/>} />
                <Route path='/steffiwebsite/resume' element={<School/>} />
                <Route path='/steffiwebsite/projects' element={<Work/>} />
                <Route path='/steffiwebsite/contact' element={<Contact/>} />
                
            </Routes>

        </AnimatePresence>
        

    )
}

export default AnimRoutes;