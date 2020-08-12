import React from 'react';
import './styles/App.css';
import project from './img/project.png';

function Work() {
return (
<main>
    <div>
        <h1>Projects</h1>
    </div>
    <div className="work-contentA">
        <div className="work-content1">
                <h3>House Management System</h3>
            <p>
                This system is developed to manage day-to-day activities of a co-operative housing society. A web
                application using C#, JavaScript, SQL Server, HTML/CSS, Bootstrap, and jQuery, that authenticates users
                and shows various activities with respect to a co-operative housing society.
            </p>
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB">
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
                Implemented and deployed a website for an NGO [tribusorg.in] using HTML/CSS, Bootstrap, JavaScript, and
                Google Cloud Services. Applied GIT to track, test and update pre-existing source code. Managed the
                website on a weekly basis.
            </p>
        </div>
    </div>

    <div className="work-contentA">
        <div className="work-content1">
            <div className="header-wrapper">
                <h3>Music Player</h3>
            </div>
            <p>
                A web application using react and Spotify API to retrieve artist's information and play their top 10
                tracks.
            </p>
        </div>
        <div className="work-content2">
            <div className="project-wrapper">
                <img src={project} alt="" />
            </div>
        </div>
    </div>

    <div className="work-contentB">
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
                    A basic webpage using react, which makes a countdown to the date provided.
                </p>
            </div>
        </div>
    </div>

</main>
);
}

export default Work;