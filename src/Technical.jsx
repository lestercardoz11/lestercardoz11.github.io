import React from 'react';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bootstrap from './img/technologies/bootstrap.svg';
import cplusplus from './img/technologies/cplusplus.svg';
import csharp from './img/technologies/csharp.svg';
import css3 from './img/technologies/css3.svg';
import github from './img/technologies/github.svg';
import heroku from './img/technologies/heroku.svg';
import html5 from './img/technologies/html5.svg';
import java from './img/technologies/java.svg';
import javascript from './img/technologies/javascript.svg';
import jquery from './img/technologies/jquery.svg';
import matlab from './img/technologies/matlab.svg';
import mysql from './img/technologies/mysql.svg';
import npm from './img/technologies/npm.svg';
import php from './img/technologies/php.svg';
import python from './img/technologies/python.svg';
import react from './img/technologies/react.svg';
import sass from './img/technologies/sass.svg';
import sqlserver from './img/technologies/sqlserver.svg';
import vscode from './img/technologies/vscode.svg';
import wordpress from './img/technologies/wordpress.svg';

function Technical() {
    AOS.init();
return (
<main>
    <div>
        <h1>Technologies I've worked with</h1>
    </div>
    <div className="technical-content">
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={javascript} alt="javascript"/>
            <p>JavaScript</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={csharp} alt="csharp"/>
            <p>C#</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={php} alt="php"/>
            <p>PHP</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={jquery} alt="jquery"/>
            <p>jQuery</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={react} alt="react"/>
            <p>React</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={html5} alt="html5"/>
            <p>HTML 5</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={css3} alt="css3"/>
            <p>CSS 3</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={sass} alt="sass"/>
            <p>SASS</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={bootstrap} alt="bootstrap"/>
            <p>Bootstrap</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={github} alt="github"/>
            <p>GitHub</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={python} alt="python"/>
            <p>Python</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={cplusplus} alt="cplusplus"/>
            <p>C++</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={java} alt="java"/>
            <p>Java</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={mysql} alt="mysql"/>
            <p>MySQL</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={sqlserver} alt="sqlserver"/>
            <p>Microsoft SQL Server</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={vscode} alt="vscode"/>
            <p>VS Code</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={heroku} alt="heroku"/>
            <p>Heroku</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={npm} alt="npm"/>
            <p>NPM</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={wordpress} alt="wordpress"/>
            <p>WordPress</p>
        </div>
        <div className="technical" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <img src={matlab} alt="matlab"/>
            <p>MATLAB</p>
        </div>
    </div>
</main>
);
}

export default Technical;