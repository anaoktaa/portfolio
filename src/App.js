import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header/>
        <MainContent/>
      {/* </Router> */}

    </div>
  );
}

export default App;
