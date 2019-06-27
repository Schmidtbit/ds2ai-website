import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
        <div>
          <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">My Services</span>
                  <h2 className="colorlib-heading">Capabilities</h2>
                </div>
              </div>
              <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-1">
                    <span className="icon">
                      <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                      <h3>Data Wrangling</h3>
                      <p>I can aggregate and transform your data into a machine readable format.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-2">
                    <span className="icon">
                      <i className="icon-data" />
                    </span>
                    <div className="desc">
                      <h3>AWS Cloud</h3>
                      <p>I can help you set up and manage your data with Amazon Web Services.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                    <span className="icon">
                      <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                      <h3>Statistical Analysis</h3>
                      <p>I can give you insights into your data with statistical evaluation and testing.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-4">
                    <span className="icon">
                      <i className="icon-layers2" />
                    </span>
                    <div className="desc">
                      <h3>Business Intelligence</h3>
                      <p>I can prepare customized data visualizations to help you track key business and operational metrics.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-5">
                    <span className="icon">
                      <i className="icon-data" />
                    </span>
                    <div className="desc">
                      <h3>Technical Sales</h3>
                      <p>I can help educate and deliver technical solutions to your company leaders and clients.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-6">
                    <span className="icon">
                      <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                      <h3>Algorithm Development</h3>
                      <p>I can program and train Machine Learning and optimization algorithms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}
