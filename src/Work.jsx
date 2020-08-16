import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import project1 from './img/project1.png';
import project2 from './img/project2.png';
import project3 from './img/project3.png';
import project4 from './img/project4.png';

function Work() {
AOS.init();
return (
<main id="project-section">
    <div>
        <h1>Projects</h1>
    </div>
    <div className="work-contentA" data-aos="zoom-in-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="work-content1">
            <h3>Housing Management System</h3>
            <p>
                A web application developed to manage day to day activities of a co-operative
                housing society. This application authenticates users and shows various activities with respect to a
                co-operative housing society.
                <br /><br />
                <b>Tools: </b>
                C#, JavaScript, SQL Server, HTML/CSS, Bootstrap, and jQuery.
            </p>
            <div>
                <a href="https://github.com/lestercardoz11/housing-management-system"
                    className="btn btn-sm animated-button button-effect"> View Code </a>
            </div>
            <br />
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project1} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB" data-aos="zoom-in-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="work-content3">
            <div className="project-wrapper">
                <img src={project2} alt="" />
            </div>
        </div>
        <div className="work-content4">
            <div className="header-wrapper">
                <h3>Tribus</h3>
            </div>
            <p>
                A website built and deployed for an NGO showcasing work that they have accomplished,
                details of the NGO, a donation link to the organisation and an inclusion of google forms API.
                <br /><br />
                <b>Tools: </b>
                HTML/CSS, Bootstrap, JavaScript, and Google Cloud Services
            </p>
                <a href="https://github.com/lestercardoz11/tribus-organisation"
                    className="btn btn-sm animated-button button-effect"> View Code </a>
            <br />
        </div>
    </div>

    <div className="work-contentA" data-aos="zoom-in-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="work-content1">
            <div className="header-wrapper">
                <h3>Music Player</h3>
            </div>
            <p>
                A web application using Spotify API to retrieve artist's information and play their top 10
                tracks.
                <br /><br />
                <b>Tools: </b>
                React, JavaScript, HTML/CSS, Bootstrap and Spotify API.
            </p>
                <a href="https://github.com/lestercardoz11/music-player"
                    className="btn btn-sm animated-button button-effect"> View Code </a>
            <br />
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project3} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB" data-aos="zoom-in-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="work-content3">
            <div className="project-wrapper">
                <img src={project4} alt="" />
            </div>
        </div>
        <div className="work-content4">
            <div>
                <div className="header-wrapper">
                    <h3>Count Down</h3>
                </div>
            </div>
            <div className="para-wrapper">
                <p>
                    A basic webpage which makes a countdown to the date provided.
                    <br /><br />
                    <b>Tools: </b>
                    React, JavaScript, HTML/CSS, and Bootstrap
                </p>
                    <a href="https://github.com/lestercardoz11/count-down"
                        className="btn btn-sm animated-button button-effect"> View Code </a>
                <br />
            </div>
        </div>
    </div>

</main>
);
}

export default Work;