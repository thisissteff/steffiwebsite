import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';




const Nav = () => {
  return (
    <nav className="navbar">
      <Link className = "logo" to='/steffiwebsite'>STEFFI LIM</Link>
      <input type = "checkbox" id="toggler"></input>
      <label for = "toggler"><i className="uil uil-ellipsis-h"></i></label>
      <div className="menu">
        <ul className="list">
          <Link to = '/steffiwebsite/about'>About</Link>
          <Link to = '/steffiwebsite/resume'>Resume</Link>
          <Link to= '/steffiwebsite/projects'>Projects</Link>
          <Link to= '/steffiwebsite/contact'>Contact</Link>
        </ul>
      </div>

    </nav>

      

            

    
  );
};

export default Nav;
