import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <div>
          <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Andrea</h1>
                          <h2></h2>
                          <p><a href="https://docs.google.com/document/d/1lbWTQ9VI3MNL-Lvzq1EhCJJ3xuqo9fO_d_1cbhf2x7M/edit?usp=sharing" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I'm a<br />Data Scientist</h1>
                          <h2>I help businesses achieve their goals through data-driven intelligence and optimization.</h2>
                          <p><a href="https://github.com/Schmidtbit" className="btn btn-primary btn-learn">View Portfolio on GitHub<i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
