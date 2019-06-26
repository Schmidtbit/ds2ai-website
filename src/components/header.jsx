import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="header-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="site-logo">
                  <h2>Civic</h2>
                  <p>Enhance your online presence</p>
                </div>
              </div>
              <div className="col-md-8 text-md-right header-buttons">
                <a href="https://docs.google.com/document/d/1lbWTQ9VI3MNL-Lvzq1EhCJJ3xuqo9fO_d_1cbhf2x7M/edit?usp=sharing" className="site-btn">View CV</a>
              </div>
            </div>
          </div>
        </header>
        )
      }
    }
