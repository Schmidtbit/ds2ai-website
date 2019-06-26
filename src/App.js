export default App;

import React, { Component } from 'react';
import './App.css';
import Top from './components/top'
import Header from './components/header'
import Hero from './components/hero'
import Social from './components/social'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import Resume from './components/resume'
import Education from './components/education'
import Portfolio from './components/portfolio'
import Review from './components/review'
import Footer from './components/footer'
import Contact from './components/contact'


class App extends Component {
  render() {
    return (
      <div>
        <Top></Top>
        <div>
          <div id="preloder">
          <div className="loader" />
        </div>
        <Header></Header>
        <Hero></Hero>
        <Social></Social>
        <Skills></Skills>
        <Resume></Resume>
        <Education></Education>
        <Portfolio></Portfolio>
        <Review></Review>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
