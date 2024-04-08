import React from 'react';
import Header from './layout/CustomHeader';
import HomePage from './components/HomePage';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
