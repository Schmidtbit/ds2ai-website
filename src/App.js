

import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/sidebar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Counter from './components/counter'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Work from './components/work'
import Blog from './components/blog'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
    		<div class="container-wrap">
          <Sidebar />
        <div id="colorlib-main">
          <Hero />
          <About />
          <Services />
          <Counter />
          <Skills />
          <Education />
          <Experience />
          <Work />
          <Blog />
          <Contact />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
