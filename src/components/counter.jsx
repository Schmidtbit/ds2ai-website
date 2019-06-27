import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
    <div>
      <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="colorlib-narrow-content">
          <div className="row">
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={2} data-to={2} data-speed={1} data-refresh-interval={1} />
              <span className="colorlib-counter-label">AWS Certifications</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={3} data-to={3} data-speed={1} data-refresh-interval={1} />
              <span className="colorlib-counter-label">Current Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={7} data-to={7} data-speed={1} data-refresh-interval={1} />
              <span className="colorlib-counter-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
