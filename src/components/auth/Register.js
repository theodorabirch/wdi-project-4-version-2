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
        <div className="form-container">
          <form onSubmit={this.handleSubmit} id="signup">
            <div className="header">
              <h3>Sign Up</h3>
              <p>Your Wellness journey begins here</p>
            </div>

            <div className="sep"></div>

            <div className="inputs">
              <input className="input" type="name" name="forename" placeholder="Forename" onChange={this.handleChange}/>

              <input className="input" type="name" name="surname" placeholder="Surname" onChange={this.handleChange}/>

              <input className="input" type="username" name="username" placeholder="Username" onChange={this.handleChange}/>

              <input className="input" type="email" name="email" placeholder="e-mail" onChange={this.handleChange} autoFocus />

              <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} />

              <input className="input" type="text" name="profilePicture" placeholder="https://www..." onChange={this.handleChange} />

              <input className="input" type="number" name="age" placeholder="Age" onChange={this.handleChange}/>

              <input className="input" type="number" name="weight" placeholder="Weight (kg)" onChange={this.handleChange}/>

              <input className="input" type="number" name="height" placeholder="Height (cm)" onChange={this.handleChange}/>

              <div className="checkboxy">
                <input name="Male" value="Male" type="checkbox" /><label className="terms">Male</label>
                <input name="Female"  value="Female" type="checkbox" /><label className="terms">Female</label>
              </div>

              <button id="submit" className="button is-primary"> Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
