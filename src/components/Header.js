import React from 'react';
// import { Link } from 'react-router-dom';

function Header(){
  return(
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">
            Avocardio
          </a>
        </div>
        <label htmlFor="menu-toggle" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type="checkbox" id="menu-toggle" className="is-hidden"/>

        <div className="nav-right nav-menu">
          <a className="nav-item">
            Home
          </a>
          <a className="nav-item">
            Dashboard
          </a>
          <a className="nav-item">
            Food Store
          </a>
          <a className="nav-item">
            Exercise Log
          </a>
          <a className="nav-item">
            Tags
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
