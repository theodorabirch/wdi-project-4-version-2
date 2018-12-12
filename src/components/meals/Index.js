import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authorizationHeader, isAuthenticated } from '../../lib/auth';
// import UserThumbnail from '../users/UserThumbNail';
// import MealLayout from './Layout';


export default class MealsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting MealIndex');

    axios.get('/api/meals', authorizationHeader())
      .then(res => {
        this.setState({ meals: res.data }, () => {
          console.log('res.data is', res.data);
          console.log('this.state.meals', this.state.meals );
        });
      });
  }

  render() {
    const mealArray = this.state.meals;

    return(
      <div>
        {mealArray
          ?
          <div className="columns is-multiline">
            <section className="container">

              <div className="columns features">
                {mealArray.map(meal =>
                  <div key={meal._id} className="column is-4">
                    <div className="card is-shady">

                      <div className="card-image">
                        <figure className="image is-4by4">
                          {isAuthenticated() && <Link to={`/meal/${meal._id}`}>
                            <img src="https://imgur.com/8dhZVLm.png" alt="Placeholder image" className="modal-button" data-target="modal-image2"/>
                          </Link>}

                        </figure>
                      </div>

                      <div className="card-content">
                        <div className="content">
                          <h2>{meal.name}</h2>
                          <h3>{meal.date}</h3>
                          <h4>{meal.totalCalories}</h4>
                          { meal.servings.map(serving =>
                            <div className="servings" key={serving._id}>
                              <p>{serving.food.name}</p>
                            </div>)
                          }
                          {isAuthenticated() && <Link className="button is-link modal-button" to={`/meal/${meal._id}/edit`}>Edit</Link>}
                        </div>
                      </div>
                      <div>
                        {isAuthenticated() && <Link to={`/meal/${meal._id}`}><button>Show</button></Link>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          :

          <p> Await your meal..</p>}
      </div>
    );
  }
}
