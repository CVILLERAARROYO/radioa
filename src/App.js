import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <audio controls><source src="http://radiohd.streaminghd.co:7226/live?1588198776" type="audio/ogg"/></audio>
      </header>
    </div>
  );
}

export default App;
