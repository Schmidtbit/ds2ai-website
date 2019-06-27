import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about5.jpg)'}} />
              <h1>Andrea Schmidt</h1><span className="position">Data Scientist </span>
              <ul class="nav">
                  <li><a href="https://github.com/"><i className="icon-github" /></a></li>
                  <li><a href="https://twitter.com/schmidtatweets"><i className="icon-twitter2" /></a></li>
                  <li><a href="https://www.instagram.com/hausofdre/"><i className="icon-instagram" /></a></li>
                  <li><a href="https://www.linkedin.com/in/schmidtbit/"><i className="icon-linkedin2" /></a></li>
              </ul>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                <li><a href="#" data-nav-section="about">About</a></li>
                <li><a href="#" data-nav-section="services">Services</a></li>
                <li><a href="#" data-nav-section="skills">Skills</a></li>
                <li><a href="#" data-nav-section="education">Education</a></li>
                <li><a href="#" data-nav-section="experience">Experience</a></li>
                <li><a href="#" data-nav-section="work">Projects</a></li>
                <li><a href="#" data-nav-section="blog">Blog</a></li>
                <li><a href="#" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>

          <div className="colorlib-footer">
            <p><small>2019 © {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </small></p>
          </div>
        </aside>
        </div>
      </div>
      )
    }
  }
