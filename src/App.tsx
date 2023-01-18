import React from 'react';
import './App.css';
import Blog from './components/Blog'
import logo from './logo.png'

function App() {
  return (
    <div>
      <header>
      </header>
        <img src={logo} alt="logo" className="logo"/>
        <Blog/>
    </div>
  );
}

export default App;

