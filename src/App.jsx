import React from 'react';
import './styles/App.css';

function App() {
return (
<div className="App">
  <header className="App-header">
    <div className="main-header-content">
      <h1>Hi, I'm Lester Cardoz.</h1>
      <h2>I'm a web developer.</h2>
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