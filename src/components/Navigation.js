import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/react-portfolio">About Me</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </li>
    </ul>
  );
}

export default Navigation;
