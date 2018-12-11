import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated, authorizationHeader } from '../../lib/auth';


export default class MealShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/meal/${this.props.match.params.id}`, authorizationHeader())
      .then(res => {
        this.setState({ meal: res.data }, () => {
          console.log(this.state);
        });
      });
  }

  handleDelete(event) {
    event.preventDefault();
    axios.delete(`/api/meal/${this.state.meal._id}`)
      .then(() => {
        this.props.history.push('/meals');
      });
  }

  render() {
    const meal = this.state.meal;
    return(
      <div>
        {meal
          ?
          <div className="columns is-multiline">

            <p>{meal.name}</p>
            <p>{meal.date}</p>
            <p>{meal.totalCalories}</p>
            <div>
              {meal.servings && meal.servings.map(
                serving =>
                  <div key={serving._id} className="servings-item">
                    <p>{serving.food.name}</p>


                  </div>
              )

              }
            </div>
            <div>
              {isAuthenticated() && <Link to={`/meal/${meal._id}/edit`}><button>Edit</button></Link>}
            </div>
          </div>
          :
          <p><img src="https://media.giphy.com/media/uWcs07J0OelqwWLWCn/giphy.gif" /></p>}
      </div>
    );
  }
}
