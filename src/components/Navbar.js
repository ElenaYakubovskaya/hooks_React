import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="navbar-brand ms-5">Github Search</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Main
            </Link>
            <Link to="/about" className="nav-link">
              Information
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
