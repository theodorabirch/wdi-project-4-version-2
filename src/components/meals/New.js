import React from 'react';
import axios from 'axios';

import { authorizationHeader } from '../../lib/auth';


export default class MealNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    axios.post('/api/meals', this.state, authorizationHeader())
      .then(result => this.props.history.push(`/meal/${result.data._id}`));
  }
  handleChange({ target: {name, value }}) {
    this.setState({ [name]: value });
  }
  render() {
    return(
      <section>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} id="signup">
            <div className="header">
              <h3>Log A Meal</h3>
            </div>

            <div className="sep"></div>

            <div className="inputs">
              <div className='mulipleInput'>
                <input className="input" type="date" name="date" placeholder="DD / MM / YYYY" onChange={this.handleChange} value={this.state.date || ''}/>
              </div>

              <input className="input" type="food" name="food" placeholder="Avocado" onChange={this.handleChange} value={this.state.food || ''}/>

              <input className="input" type="number" name="quantity" onChange={this.handleChange} value={this.state.quantity || ''} autoFocus />

              <select className='select' name="name" onChange={this.handleChange} value={this.state.name || ''}>
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snack'>Snack</option>
              </select>

              <button id="submit" className="button is-primary">Confirm</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
