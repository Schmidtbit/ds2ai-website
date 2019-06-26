import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
    <section className="resume-section spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 offset-xl-2">
            <div className="section-title">
              <h2>Work Experience</h2>
            </div>
            <ul className="resume-list">
              <li>
                <h2>2016-Present</h2>
                <h3>Web Design Company</h3>
                <h4>Web Designer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>
              </li>
              <li>
                <h2>2014-2016</h2>
                <h3>Web Design Company</h3>
                <h4>Web Designer</h4>
                <p>Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
