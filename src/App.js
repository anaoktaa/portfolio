import React, { lazy, Suspense } from 'react';
import './App.css';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';

const About = lazy(() => import('./components/about/about.component'));


function App() {
  return (
    <div className="App">
        <Header/>
        <MainContent/>
        <Suspense fallback={<div/>}>
          <About/>
       </Suspense>
    </div>
  );
}

export default App;
