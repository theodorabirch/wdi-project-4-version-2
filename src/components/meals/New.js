import React from 'react';
import axios from 'axios';

import { authorizationHeader } from '../../lib/auth';


export default class NewMeal extends React.Component {
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
        <form onSubmit={this.handleSubmit}>
          <label>Strength</label>
          <input onChange={this.handleChange}
            value={this.state.strength || ''}
            name="strength"
          />
          <label>Brand</label>
          <input onChange={this.handleChange}
            value={this.state.brand || ''}
            name="brand"
          />
          <label>Country of Origin</label>
          <input onChange={this.handleChange}
            value={this.state.countrOfOrigin || ''}
            name="countrOfOrigin"
          />
          <label>Flavour</label>
          <input onChange={this.handleChange}
            value={this.state.flavour || ''}
            name="flavour"
          />
          <label>Tasting Notes</label>
          <input onChange={this.handleChange}
            value={this.state.tastingNotes || ''}
            name="tastingNotes"
          />
          <label>Price in Asda</label>
          <input onChange={this.handleChange}
            value={this.state.priceInAsda || ''}
            name="priceInAsda"
          />
          <label>Price in Waitrose</label>
          <input onChange={this.handleChange}
            value={this.state.priceInWaitrose || ''}
            name="priceInWaitrose"
          />
          <label>Image</label>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
          />
          <button>Add your meal</button>
        </form>
      </section>
    );
  }
}
