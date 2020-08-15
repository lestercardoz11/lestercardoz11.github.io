import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import project from './img/project.png';

function Work() {
    AOS.init();
return (
<main id="project-section">
    <div>
        <h1>Projects</h1>
    </div>
    <div className="work-contentA" data-aos="fade-left">
        <div className="work-content1">
            <h3>Housing Management System</h3>
            <p>
                This system is developed to manage day-to-day activities of a co-operative housing society. A web
                application that authenticates users and shows various activities with respect to a co-operative housing
                society.
                <br />
                <b>Tools: </b>
                <br />
                C#, JavaScript, SQL Server, HTML/CSS, Bootstrap, and jQuery.
            </p>
            <div className="button-wrapper">
                <button className="code-button"><span>View Code</span></button>
            </div>
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB" data-aos="fade-up-right">
        <div className="work-content3">
            <div className="project-wrapper">
                <img src={project} alt="" />
            </div>
        </div>
        <div className="work-content4">
            <div className="header-wrapper">
                <h3>Tribus</h3>
            </div>
            <p>
                Part of a voluntery experience, implemented and deployed a website for a non-profit organization.
                <br />
                <b>Tools: </b>
                <br />
                HTML/CSS, Bootstrap, JavaScript, and Google Cloud Services
            </p>
        </div>
    </div>

    <div className="work-contentA" data-aos="fade-left">
        <div className="work-content1">
            <div className="header-wrapper">
                <h3>Music Player</h3>
            </div>
            <p>
                A web application using Spotify API to retrieve artist's information and play their top 10
                tracks.
                <br />
                <b>Tools: </b>
                <br />
                React, JavaScript, HTML/CSS, Bootstrap and Spotify API.
            </p>
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB" data-aos="fade-up-right">
        <div className="work-content3">
            <div className="project-wrapper">
                <img src={project} alt="" />
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
                    <br />
                    <b>Tools: </b>
                    <br />
                    React, JavaScript, HTML/CSS, and Bootstrap
                </p>
            </div>
        </div>
    </div>

</main>
);
}

export default Work;