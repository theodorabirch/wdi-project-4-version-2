import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
import { handleChange } from '../../lib/common';

class AuthRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/api/register', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push('/burgers'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default AuthRegister;