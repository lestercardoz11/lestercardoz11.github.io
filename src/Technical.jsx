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
        </div>
        <div className="technical">
            <img src={csharp} alt=""/>
        </div>
        <div className="technical">
            <img src={php} alt=""/>
        </div>
        <div className="technical">
            <img src={jquery} alt=""/>
        </div>
        <div className="technical">
            <img src={react} alt=""/>
        </div>
        <div className="technical">
            <img src={html5} alt=""/>
        </div>
        <div className="technical">
            <img src={css3} alt=""/>
        </div>
        <div className="technical">
            <img src={sass} alt=""/>
        </div>
        <div className="technical">
            <img src={bootstrap} alt=""/>
        </div>
        <div className="technical">
            <img src={github} alt=""/>
        </div>
        <div className="technical">
            <img src={python} alt=""/>
        </div>
        <div className="technical">
            <img src={cplusplus} alt=""/>
        </div>
        <div className="technical">
            <img src={java} alt=""/>
        </div>
        <div className="technical">
            <img src={mysql} alt=""/>
        </div>
        <div className="technical">
            <img src={sqlserver} alt=""/>
        </div>
        <div className="technical">
            <img src={vscode} alt=""/>
        </div>
        <div className="technical">
            <img src={heroku} alt=""/>
        </div>
        <div className="technical">
            <img src={npm} alt=""/>
        </div>
        <div className="technical">
            <img src={wordpress} alt=""/>
        </div>
        <div className="technical">
            <img src={matlab} alt=""/>
        </div>
    </div>
</main>
);
}

export default Technical;