import React from 'react';
import './styles/App.css';
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
return (
<main>
    <div>
        <h1>Technologies I've worked with</h1>
    </div>
    <div className="technical-content">
        <div className="technical">
            <img src={javascript} alt=""/>
            <p>JavaScript</p>
        </div>
        <div className="technical">
            <img src={csharp} alt=""/>
            <p>C#</p>
        </div>
        <div className="technical">
            <img src={php} alt=""/>
            <p>PHP</p>
        </div>
        <div className="technical">
            <img src={jquery} alt=""/>
            <p>jQuery</p>
        </div>
        <div className="technical">
            <img src={react} alt=""/>
            <p>React</p>
        </div>
        <div className="technical">
            <img src={html5} alt=""/>
            <p>HTML 5</p>
        </div>
        <div className="technical">
            <img src={css3} alt=""/>
            <p>CSS 3</p>
        </div>
        <div className="technical">
            <img src={sass} alt=""/>
            <p>SASS</p>
        </div>
        <div className="technical">
            <img src={bootstrap} alt=""/>
            <p>Bootstrap</p>
        </div>
        <div className="technical">
            <img src={github} alt=""/>
            <p>GitHub</p>
        </div>
        <div className="technical">
            <img src={python} alt=""/>
            <p>Python</p>
        </div>
        <div className="technical">
            <img src={cplusplus} alt=""/>
            <p>C++</p>
        </div>
        <div className="technical">
            <img src={java} alt=""/>
            <p>Java</p>
        </div>
        <div className="technical">
            <img src={mysql} alt=""/>
            <p>MySQL</p>
        </div>
        <div className="technical">
            <img src={sqlserver} alt=""/>
            <p>Microsoft SQL Server</p>
        </div>
        <div className="technical">
            <img src={vscode} alt=""/>
            <p>VS Code</p>
        </div>
        <div className="technical">
            <img src={heroku} alt=""/>
            <p>Heroku</p>
        </div>
        <div className="technical">
            <img src={npm} alt=""/>
            <p>NPM</p>
        </div>
        <div className="technical">
            <img src={wordpress} alt=""/>
            <p>WordPress</p>
        </div>
        <div className="technical">
            <img src={matlab} alt=""/>
            <p>MATLAB</p>
        </div>
    </div>
</main>
);
}

export default Technical;