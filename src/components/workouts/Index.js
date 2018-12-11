import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authorizationHeader, isAuthenticated } from '../../lib/auth';



export default class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting WorkoutIndex');

    axios.get('/api/workouts', authorizationHeader())
      .then(res => {
        this.setState({ workouts: res.data }, () => {
          console.log('res.data is', res.data);
          console.log('this.state.workouts', this.state.workouts );
        });
      });
  }

  render() {
    const workoutArray = this.state.workouts;
    console.log('this is workOutarray', workoutArray);

    return(
      <div>
        {workoutArray
          ?
          <div className="columns is-multiline">
            {workoutArray.map(workout =>
              <div key={workout._id}>

                <p>{workout.duration}</p>
                <p>{workout.date}</p>
                <p>{workout.exercise.type}</p>
                <p>{workout.exercise.intensity}</p>
                {
                  <div>
                    {isAuthenticated() && <Link to={`/workout/${workout._id}/edit`}><button>Edit</button></Link>}
                  </div> }
              </div>
            )}
          </div>

          :
          <p> Await your meal..</p>}
      </div>
    );
  }
}
