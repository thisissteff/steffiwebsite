import React from 'react';
import "./App.css";
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

import AnimRoutes from './Components/AnimRoutes/AnimRoutes';

import{BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return (
    <>
      
      <Router>
        <Nav />
        <Home />
        <AnimRoutes />

      </Router>

      

      
 
      

       
    </>
      

  );
};

export default App;
