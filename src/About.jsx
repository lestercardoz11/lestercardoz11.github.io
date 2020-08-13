import React from 'react';
import './styles/App.css';
import linkedin from './img/card/linkedin.png';
import github from './img/card/github.png';
import instagram from './img/card/instagram.png';


function About() {
return (
<main id="about-section">
    <div>
        <h1>About me</h1>
    </div>

    <div className="main-content">
        <div className="about-content1">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="about-content2">
            <div className="card">
                <header></header>
                <div className="card-content">
                    <a className="img-wrapper" href="https://www.linkedin.com/in/lestercardoz11/"><img src={linkedin} alt="linkedin" /></a>
                    <a className="img-wrapper" href="https://github.com/lestercardoz11"><img src={github} alt="github" /></a>
                    <a className="img-wrapper" href="https://www.instagram.com/lestercardoz11/"><img src={instagram} alt="instagram" /></a>
                </div>
            </div>
        </div>
    </div>
</main>
);
}

export default About;