import React from 'react';
import axios from 'axios';
import { saveToken, decodeToken } from '../../lib/auth';
import { handleChange } from '../../lib/common';


class Login extends React.Component {
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
      .then(() => {
        this.props.history.push(`/user/${ decodeToken().sub}`);
      });

  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://imgur.com/lxvYXZv.png"/>
                </figure>
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        type="password"
                        className="input is-large"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password || ''}
                      />
                    </div>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
