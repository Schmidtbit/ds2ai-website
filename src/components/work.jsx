import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
    <div>
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Projects</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">

            </div>
          </div>
          <div className="row">

            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="project" style={{backgroundImage: 'url(images/generic-map.png)'}}>
                <div className="desc">
                  <div className="con" >
                    <h3><a href="https://github.com/Schmidtbit/Bus-Route-Optimization">Route Optimization with a Genetic Algorithm</a></h3>
                    <span>Galvanize Capstone Project</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{backgroundImage: 'url(images/paperwork.jpg)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://github.com/Schmidtbit/Prudential-Life-Kaggle">Acturial Risk Classification</a></h3>
                    <span>Prudential Life Insurance Kaggle Competition</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{backgroundImage: 'url(images/walmart-pic.jpg)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://github.com/Schmidtbit/Forecasting-Walmart-Kaggle">Forecasting Walmart Sales</a></h3>
                    <span>Walmart Sales Prediction Kaggle Competition</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{backgroundImage: 'url(images/robot.jpg)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://github.com/Schmidtbit/DigiKey-Scraper-ETL">Workflow Automation</a></h3>
                    <span>Automating Manual Workflows with Webscraping and Python Scripting </span>
                  </div>
                </div>
              </div>
            </div>

          <div className="row">
            <div className="col-md-12 animate-box">
              <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
    )
  }
}
