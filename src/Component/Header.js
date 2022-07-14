import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    
  return (
    <>
      <header className="topnav" id="myTopnav">
        <a href=" #">React</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">UseRef</NavLink>
            </li>
            <li>
              <NavLink to="/useAPI">UseAPI</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">useState</NavLink>
            </li>

            <li>
              <NavLink to="/usereducer">UseReducer</NavLink>
            </li>
          </ul>
          
        </nav>
      </header>
    </>
  );
};

export default Header;
