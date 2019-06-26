import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
    <div>
      <section className="extra-section spad pb-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title">
                <h2>Extra Skills</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 pt-5">
                  <div className="fact-box trans">
                    <div className="fact-content">
                      <div className="circle-progress">
                        <div id="progress1" className="prog-circle" />
                        <div className="progress-info">
                          <h2>75%</h2>
                        </div>
                        <div className="prog-title">
                          <h3>Inspiration</h3>
                          <p>Etiam nec odio vestibulum est.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 pt-5">
                  <div className="fact-box trans">
                    <div className="fact-content">
                      <div className="circle-progress">
                        <div id="progress2" className="prog-circle" />
                        <div className="progress-info">
                          <h2>83%</h2>
                        </div>
                        <div className="prog-title">
                          <h3>Inspiration</h3>
                          <p>Etiam nec odio vestibulum est.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="fact-box">
                    <div className="fact-content">
                      <img src="img/icon/1-w.png" alt />
                      <h2>14</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="fact-box">
                    <div className="fact-content">
                      <img src="img/icon/2-w.png" alt />
                      <h2>9</h2>
                      <p>Awards Won</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Extra section end */}
      {/* Contact section start */}
      <section className="contact-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title">
                <h2>Contact Me</h2>
              </div>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="E-mail" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="text-md-right">
                  <button className="site-btn">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}
