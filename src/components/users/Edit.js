import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';


export default class UserEdit extends React.Component {
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
    axios.put(`/api/user/${this.state._id}`, this.state, authorizationHeader())
      .then(result =>
        this.props.history.push(`/user/${result.data._id}`)
      );
  }

  handleChange({ target: {name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Forename</label>
          <input onChange={this.handleChange}
            value={this.state.forename || ''}
            name="forename"
          />
          <label>Surname</label>
          <input onChange={this.handleChange}
            value={this.state.surname || ''}
            name="surname"
          />
          <label>Age</label>
          <input onChange={this.handleChange}
            value={this.state.age || ''}
            name="age"
          />
          <label>Sex</label>
          <input onChange={this.handleChange}
            value={this.state.sex || ''}
            name="sex"
          />
          <label>Height</label>
          <input onChange={this.handleChange}
            value={this.state.height || ''}
            name="height"
          />
          <label>Weight</label>
          <input onChange={this.handleChange}
            value={this.state.weight || ''}
            name="weight"
          />
          <button>Edit the user</button>
        </form>
      </section>
    );
  }
}
