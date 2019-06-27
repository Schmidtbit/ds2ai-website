import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
    <div>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work Life</span>
              <h2 className="colorlib-heading animate-box">Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">

                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Data Science Consultant</a> <span>ELE.ai</span></h2>
                      <h5>9/2018 - 5/2019</h5>
                      <p>Developed client solutions and presented proof-of-concept use-cases for clients
                      interested in adopting data-driven technology and processes into their organization.
                      Designed Solution Reference Architectures and presented Artificial Intelligence and
                      Machine Learning concepts to a variety of technical and non-technical audiences.</p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Production Manager</a> <span>Evolution Salt Co.</span></h2>
                      <h5>8/2016 - 12/2017</h5>
                      <p>Managed a team of 8 employees performing manufacturing, shipping, and receiving
                      activities and coordinated international import and logistics activities. Lead
                      continuous improvement activities for manufacturing and back-office procedures
                      with projects in label printing process optimization and compliance auditing documentation.</p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Controller</a> <span>Schmidt Brands LLC.</span></h2>
                      <h5>5/2012 - 05/2016</h5>
                      <p>Maintained all financial bookkeeping and regulatory compliance documentation
                      and managed daily communication between our 3PL partners, sales team, and suppliers.
                      Traveled overseas to factories in China, Germany, and Brazil for supplier quality
                      inspections. Saved the company $50,000 annually by identifying areas of wasteful spending
                      using data and analytics. </p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Packaging Research Sales Engineer</a> <span>Signode ITW</span></h2>
                      <h5>4/2010 - 4/2012</h5>
                      <p>Conducted on-site material handling evaluations, designed packaging solutions,
                      and presented recommendations based on the unique manufacturing and distribution
                      environments of our clients. Quantified the environmental impact of plastic film
                      reductions which lead the company to receive the Environmental Impact Award from
                      Greener Packaging in 2011.</p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">B.S. Industrial Engineering</a> <span>Cal Poly San Luis Obispo</span></h2>
                      <h5>3/2017 - 3/2010</h5>
                      <p>Studied Statistical Process Control, Supply Chain Optimization, Engineering Management, and Industrial Manufacturing.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      )
    }
  }
