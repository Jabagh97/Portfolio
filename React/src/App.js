import React from 'react';
import Header from './layout/CustomHeader';
import HomePage from './components/HomePage/HomePage';
import ProjectList from './components/Projects/ProjectList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
