import React from 'react';
import studyingAvatar from '../images/studying_Avatar.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section-heading">About Me</h2>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-6">
            <div className="about-img-container">
            <img src={studyingAvatar} alt="Studying Avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
