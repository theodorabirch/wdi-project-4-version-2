import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }
  componentDidMount() {
    console.log('component was mounted');
  }

  render() {
    return(
      <nav className="nav is-warning">
        <div className="container">
          <div className="navbar-start">
            <h2 className="navbar-item">
              Avocardio
            </h2>
            { isAuthenticated() && <p> Welcome back {decodeToken().forename}</p>}
          </div>

          <div className="navbar-end nav-menu">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/login">
              Login
            </Link>
            <Link className="navbar-item" to="/register">
              Signup
            </Link>
            {isAuthenticated() && <Link className="navbar-item" to="/user/:id">
              Dashboard
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to="/foods">
              Food Store
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to="/workouts">
              Exercise Logs
            </Link>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
