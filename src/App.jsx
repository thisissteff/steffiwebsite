import React from 'react';
import "./App.css";
import Nav from './Components/Nav/Nav';


import AnimRoutes from './Components/AnimRoutes/AnimRoutes';

import{BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return (
    <>
      
      <Router>
        <Nav />
        <AnimRoutes />

      </Router>

      

      
 
      

       
    </>
      

  );
};

export default App;
