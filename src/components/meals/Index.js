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
            <section className="container index-container">

              <div className="columns is-multiline features">
                {mealArray.map(meal =>
                  <div key={meal._id} className="column is-4">
                    <div className="card is-shady">

                      <div className="card-image">
                        <figure className="image is-4by4">
                          {isAuthenticated() && <Link to={`/meal/${meal._id}`}>
                            <img src="https://imgur.com/lVOcmDm.png" alt="Placeholder image" className="modal-button" data-target="modal-image2"/>
                          </Link>}

                        </figure>
                      </div>

                      <div className="card-content index-content">
                        <div className="content">
                          <span className="stat-val">{meal.name}</span><br />
                          <span className="date-val">{meal.date.split('-')[2].substring(0, 2)}/{meal.date.split('-')[1]}/{meal.date.split('-')[0]} </span><br />
                          {isAuthenticated() && <Link className="button is-link modal-button" to={`/meal/${meal._id}/edit`}>Edit</Link>}<br/><br/>
                          <div className="card">
                            <h4><i className="fas fa-fire cal-burn"></i> {meal.totalCalories}<span className="stat-unit">kCals</span></h4>
                            {meal.servings.map(serving =>
                              <div className="servings" key={serving._id}>
                                <p><i className="fas fa-utensils"></i>  {serving.quantity}00g {serving.food.name}</p>
                              </div>)
                            }
                          </div>
                        </div>
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
