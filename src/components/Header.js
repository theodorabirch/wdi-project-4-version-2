import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <nav className="nav is-warning">
        <div className="container">
          <div className="navbar-start">
            <h2 className="navbar-item">
              Avocardio
            </h2>
          </div>

          <div className="navbar-end nav-menu">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/user/:id">
              Dashboard
            </Link>
            <Link className="navbar-item" to="/foods">
              Food Store
            </Link>
            <Link className="navbar-item" to="/workouts">
              Exercise Log
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
