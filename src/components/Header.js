import React from 'react'

function Header() {
  return (
    <>
      <header>
        <div className="top-info">
          <div className="container">
            <div className="text">
              <i className="fa fa-phone" aria-hidden="true"></i> (623)242-2382
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              vcastrejont@gmail.com
            </div>
            <div className="action">
              <div className="btn btn-white">Returning clients</div>
            </div>
          </div>
        </div>
        <div className="logo">
          <div className="container">
            <img src="img/logo.svg" alt="Matrix" />
            <nav>
              <div className="container">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
