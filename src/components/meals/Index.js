import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
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
            {mealArray.map(meal =>
              <div key={meal._id}>

                <p>{meal.name}</p>
                <p>{meal.date}</p>
                <p>{meal.totalCalories}</p>

                { meal.servings.map(serving =>
                  <div className="servings" key={serving._id}>
                    {serving.food.name}
                  </div>)
                }
              </div>
            )}
          </div>

          :
          <p> Await your meal..</p>}
      </div>
    );
  }
}
