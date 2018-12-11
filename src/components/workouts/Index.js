import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authorizationHeader, isAuthenticated } from '../../lib/auth';
// import UserThumbnail from '../users/UserThumbNail';
// import MealLayout from './Layout';


export default class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting WorkoutIndex');

    axios.get('/api/meals', authorizationHeader())
      .then(res => {
        this.setState({ workouts: res.data }, () => {
          console.log('res.data is', res.data);
          console.log('this.state.workouts', this.state.workouts );
        });
      });
  }

  render() {
    const workoutArray = this.state.workouts;

    return(
      <div>
        {workoutArray
          ?
          <div className="columns is-multiline">
            {workoutArray.map(meal =>
              <div key={meal._id}>

                <p>{workout.name}</p>
                <p>{workout.date}</p>

                { workout.exercise.map(serving =>
                  <div className="servings" key={serving._id}>
                    {workout.food.name}
                  </div>)
                }
                <div>
                  {isAuthenticated() && <Link to={`/meal/${meal._id}`}><button>Show</button></Link>}
                  {isAuthenticated() && <Link to={`/meal/${meal._id}/edit`}><button>Edit</button></Link>}
                </div>
              </div>
            )}
          </div>

          :
          <p> Await your meal..</p>}
      </div>
    );
  }
}
