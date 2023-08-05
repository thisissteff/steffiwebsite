import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';




const Nav = () => {
  return (
    <nav className="navbar">
      <Link className = "logo" to ="/">STEFFI LIM</Link>
      <input type = "checkbox" id="toggler"></input>
      <label for = "toggler"><i className="uil uil-ellipsis-h"></i></label>
      <div className="menu">
        <ul className="list">
          <Link to='/'>Home</Link>
          <Link to = '/about'>About</Link>
          <Link to = '/resume'>Resume</Link>
          <Link to= '/projects'>Projects</Link>
          <Link to= '/contact'>Contact</Link>
        </ul>
      </div>

    </nav>

      

            

    
  );
};

export default Nav;
