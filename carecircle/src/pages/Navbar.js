import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, removeUserSession } from './AuthServices';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession(); // Remove user session
    navigate('/'); // Redirect to the home page or login page
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="./assets/cc.jpeg" alt="CareCircle Logo" id="pikcho" />
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
          {isLoggedIn() && (
            <li className="navbar__item">
              <button onClick={handleLogout} className="navbar__links navbar__logout">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;