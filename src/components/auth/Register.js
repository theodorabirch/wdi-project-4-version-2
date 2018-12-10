import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(() => this.props.history.push('/login'));
    // .catch(() => {
    //   this.props.history.replace('/login');
    // });
  }

  render() {
    return (
      <div>
        <h1> Register with AvoCardio</h1>
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
          {/* <div className="field">
            <input
              type="password"
              className="input"
              name="passwordConfirmation"
              placeholder="Password confirmation"
              onChange={this.handleChange}
            />
          </div> */}
          <div>
            Let us know your ... so we can calculate your fitness targets.
          </div>
          <div className="field">
            <input
              className="input"
              name="forename"
              placeholder="Forename"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              name="surname"
              placeholder="Surname"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              type="number"
              className="input"
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
            />
          </div>
          <div className="button">
            <input
              type="radio"
              className="input"
              name="sex"
              value="Male"
              onChange={this.handleChange}
            />
            <input
              type="radio"
              className="input"
              name="sex"
              value="Female"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              type="number"
              className="input"
              name="height"
              placeholder="cm"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              type="number"
              className="input"
              name="weight"
              placeholder="kg"
              onChange={this.handleChange}
            />
          </div>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
