import React from 'react';
import './styles/App.css';
import logo from './logo.svg';
import avatar from './img/avatar.svg';
import Typical from 'react-typical';
import { Link } from 'react-scroll';

function Header() {
return (
<div className="Header">
    <header>
        <div className="logo-container">
            <a href="/#" className="App-logo"><img src={logo} alt="logo" /></a>
        </div>
        <nav>
            <ul className="nav-links">
                <li><Link className="nav-link" to="about-section" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link className="nav-link" to="project-section" spy={true} smooth={true} duration={750}>Projects</Link></li>
                <li><Link className="nav-link" to="contact-section" spy={true} smooth={true} duration={1000}>Contact</Link></li>
            </ul>
        </nav>
    </header>
    <section>
        <div className="main-header-content">
            <div className="img-cover">
                <img src={avatar} className="Avatar" alt="avatar" />
            </div>
            <div className="heading">
                <div className="head-wrap">
                    <h1>Hello!
                        <br />
                        I'm Lester Cardoz.
                        <br />
                        I'm a {' '}
                        <Typical loop={Infinity} wrapper="b" steps={[ 'Web Developer.' , 2000, 'Technology Enthusiast.'
                            , 2000, 'Footballer.' , 2000 ]} />
                    </h1>
                </div>
            </div>
        </div>
    </section>
</div>
);
}

export default Header;