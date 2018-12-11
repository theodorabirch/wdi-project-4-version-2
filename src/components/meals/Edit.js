import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';


export default class MealEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/user/${this.props.match.params.id}`, authorizationHeader())
      .then(result => this.setState(result.data), () => {
        console.log(this.state);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`/api/meal/${this.state._id}`, this.state, authorizationHeader())
      .then(result =>
        this.props.history.push(`/meals/${result.data._id}`)
      );
  }

  handleChange({ target: {name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <label>Date</label>
          <input onChange={this.handleChange}
            value={this.state.date || ''}
            name="date"
          />
          <button>Edit</button>
        </form>
      </section>
    );
  }
}
