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
          <a className="sitehead"><img src={logo} className="App-logo" alt="logo" /></a>
          <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
              <li><a><img src={mode} className="mode-logo" alt="mode" /></a></li>
          </ul>
      </div>
      <div className="main-header-content">
      <div>
        <img src={avatar} className="Avatar" alt="avatar" />
      </div>
      <div className="heading">
        <h1>Hi, I'm Lester Cardoz.</h1>
        <h2>I'm a {' '}
          <Typical 
          loop={Infinity}
          wrapper="b"
          steps={[
            'Web Developer.',
            1000,
            'Technology Enthusiast.',
            1000,
            'Footballer.',
            1000
          ]}
          />
        </h2>
        </div>
    </div>
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    <div className="grid">
      <div className="gridItem pos-1">
        <div className="gridImg img-1"></div>
      </div>
      <div className="gridItem pos-2">
        <div className="gridImg img-2"></div>
      </div>
      <div className="gridItem pos-3">
        <div className="gridImg img-3"></div>
      </div>
      <div className="gridItem pos-4">
        <div className="gridImg img-4"></div>
      </div>
      <div className="gridItem pos-5">
        <div className="gridImg img-1"></div>
      </div>
      <div className="gridItem pos-6">
        <div className="gridImg img-2"></div>
      </div>
      <div className="gridItem pos-7">
        <div className="gridImg img-3"></div>
      </div>
      <div className="gridItem pos-8">
        <div className="gridImg img-4"></div>
      </div>
    </div>
  </header>
</div>
);
}

export default App;