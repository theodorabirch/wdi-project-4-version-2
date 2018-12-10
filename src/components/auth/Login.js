import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
import { handleChange } from '../../lib/common';
// import { createFlashMessage } from '../../lib/flash';

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}`));
    // .catch((error) => {
    //   createFlashMessage(error.response.data.message, 'danger');
    //   this.props.history.replace('/login');
    // });
  }

  render() {
    return (
      <div><h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="input"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email || ''}
            />
          </div>
          <div className="field">
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password || ''}
            />
          </div>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthLogin;
