import React from 'react';
import './App.css';
import { Home } from './components/home';
import { About } from './components/about';
import { Skills } from './components/skills';

function App() {
  return (
    <div className="App font-sans">
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
