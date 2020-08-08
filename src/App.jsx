import React from 'react';
import './styles/App.css';
import logo from './logo.svg';
import mode from './img/mode.png';
import avatar from './img/avatar.svg';
import Typical from 'react-typical';


function App() {
return (
<div className="App">
  <header className="App-header">
    
    <div className="navbar">
      <a href="/#" className="sitehead"><img src={logo} className="App-logo" alt="logo" /></a>
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Contact</a></li>
        <li><a href="/#"><img src={mode} className="mode-logo" alt="mode" /></a></li>
      </ul>
    </div>
    <div className="main-header-content">
      <div>
        <img src={avatar} className="Avatar" alt="avatar" />
      </div>
      <div className="heading">
        <h1>Hi, I'm Lester Cardoz.</h1>
        <h2>I'm a {' '}
          <Typical loop={Infinity} wrapper="b" steps={[ 'Web Developer.' , 1000, 'Technology Enthusiast.' ,
            1000, 'Footballer.' , 1000 ]} />
        </h2>
      </div>
    </div>
  </header>
</div>
);
}

export default App;