import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
    <section className="portfolio-section spad pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-8 offset-xl-2 ">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="col-md-4 text-md-right">
            <a href="https://www.google.com/" className="site-btn mb-5">See All Portfolio</a>
          </div>
        </div>
        <div className="portfolio-warp">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.google.com/" className="set-bg port-pic" data-setbg="public/img/portfolio/2.jpg">content</a>
                <h2>Brand Campaign</h2>
                <p>Graphic design</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.google.com/" className="set-bg port-pic" data-setbg="public/img/portfolio/2.jpg">ahhhh</a>
                <h2>A Corporate Identity</h2>
                <p>Graphic design</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.google.com/" className="set-bg port-pic" data-setbg="img/portfolio/3.jpg">ahhhhh</a>
                <h2>Web Design Website</h2>
                <p>Graphic design</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.google.com/" className="set-bg port-pic" data-setbg="img/portfolio/4.jpg">agggggg</a>
                <h2>Logo design</h2>
                <p>Graphic design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
