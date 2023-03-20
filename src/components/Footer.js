import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">&copy; Your Name {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
