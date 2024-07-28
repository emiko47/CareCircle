import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
        <img src="./assets/cc.jpeg" alt="dey play" id = "pikcho"/>
          CareCircle
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__links">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/To-Do" className="navbar__links">To-Do</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Crossy-Care" className="navbar__links">Crossy Care</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Treatment" className="navbar__links">Treatment</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Resources" className="navbar__links">Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

  