import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header/>
        <MainContent/>
        <About/>
      {/* </Router> */}

    </div>
  );
}

export default App;
