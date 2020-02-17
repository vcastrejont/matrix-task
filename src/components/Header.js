import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <header>
        <div className="top-info">
          <div className="container">
            <div className="row">
              <div className="col-md-10 text sr-only">
                <i className="fa fa-phone" aria-hidden="true"></i> (623)242-2382
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                vcastrejont@gmail.com
              </div>
              <div className=" col-md-2 action">
                <div className="btn btn-white">Returning clients</div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo container">
          <div className="row">
            <div class="col-md-4">
              <img src="img/logo.svg" alt="Matrix" />
            </div>
            <div class="col-md-8">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
