import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
    <div>
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Tech Stack</span>
              <h2 className="colorlib-heading animate-box">Technical Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <p>Every day I am learning new tools based on the needs and requirements of my projects.
              I use whatever I need to in order to get the job done, but here are some of the most common technologies I use today:</p>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Python</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} style={{width: '63%'}}>
                    <span>63%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>SQL</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} style={{width: '58%'}}>
                    <span>58%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Jupyter Notebook</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{width: '93%'}}>
                    <span>93%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>AWS</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} style={{width: '84%'}}>
                    <span>84%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Git</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>Apache Spark</h3>
                <div className="progress">
                  <div className="progress-bar color-6" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                    <span>40%</span>
                  </div>
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
