import React, { lazy, Suspense, useContext } from 'react';
import './App.css';

import { SystemContext } from './provider/system.provider';

import MainContent from './components/main-content/main-content.component';
import Header from './components/header/header.component';

const About = lazy(() => import('./components/about/about.component'));
const Experiences = lazy(() => import('./components/experiences/experiences.component'));
const Works = lazy(() => import('./components/works/works.component'));

const App = () => {
  const { mode } = useContext(SystemContext);
  return (
    <div data-theme={mode} className="App">
      <Header/>
      <MainContent/>
        <Suspense fallback={<div>Ini looooo</div>}>
          <About/>
          <Experiences/>
          <Works/>
      </Suspense>
    </div>
  )
}

export default App;
