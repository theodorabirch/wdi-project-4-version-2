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
    console.log('header component was mounted');
  }

  render() {
    return(
      <nav className="nav is-warning">
        <div className="container">

          <div className="navbar-end nav-menu">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            {!isAuthenticated() && <Link className="navbar-item" to="/login">
              Login
            </Link>}

            {!isAuthenticated() &&<Link className="navbar-item" to="/register">
              Signup
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to={`/user/${decodeToken().sub}`}>
              Dashboard
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to="/foods">
              Food Store
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to={'/workouts'}>
              Exercise Logs
            </Link>}
            {isAuthenticated() && <Link className="navbar-item" to={'/meals'}>
                Meals Index
            </Link>}
            { isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>
              Logout
            </a>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
