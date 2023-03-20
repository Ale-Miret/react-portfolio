import React from 'react';
import movieSearch from '../images/Movie_search_image.png';
import jsQuiz from '../images/codequizimage.png'
import noteTaker from '../images/notetakerimg.png'
import jate from '../images/JATE.png'
import weatherDash from '../images/weather-dashimg.png'
import pms from '../images/PMS.png'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-heading">Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="portfolio-item">
              
              <div className="portfolio-caption">
                <h4>Project 1</h4>
                <a href="https://ale-miret.github.io/Media-search/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={movieSearch} alt="movie search screenshot" /> 
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/Project-2.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            
            
            <div className="portfolio-item">
              <div className="portfolio-caption">
                <h4>Project 2</h4>
                <a href="https://ale-miret.github.io/code-quiz/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={jsQuiz} alt="JavaScript Quiz" />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/code-quiz" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            
            
            <div className="portfolio-item">
              <div className="portfolio-caption">
               <h4>Project 3</h4>
               <a href="https://aqueous-dawn-30920.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={noteTaker} alt="Note taking app" />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/note-taker" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            
            
            
            <div className="portfolio-item">
              <div className="portfolio-caption">
                <h4>Project 4</h4>
                <a href="https://frozen-falls-99998.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={jate} alt="Just Another Text Editor" />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/text-editor" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            
            
            <div className="portfolio-item">
              <div className="portfolio-caption">
                <h4>Project 5</h4>
                <a href="https://ale-miret.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={weatherDash} alt="weather dashboard" />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/weather-dashboard" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            
            
            
            <div className="portfolio-item">
              
              <div className="portfolio-caption">
                <h4>Project 6</h4>
                <a href="https://your-app.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={pms} alt="Project Management System" />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/Ale-Miret/NoPMS" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

