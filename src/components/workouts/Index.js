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
            <section className="container index-container">

              <div className="columns is-multiline features">
                {workoutArray.map(workout =>
                  <div key={workout._id} className="column is-4">
                    <div className="card is-shady">

                      <div className="card-image">
                        <figure className="image is-4by4">
                          {isAuthenticated() && <Link to={`/workout/${workout._id}`}>
                            <img src="https://im3.ezgif.com/tmp/ezgif-3-fd0f4ea1196a.gif" alt="Placeholder image" className="modal-button" data-target="modal-image2"/>
                          </Link>}

                        </figure>
                      </div>

                      <div className="card-content index-content">
                        <div className="content">
                          <span className="stat-val">{workout.exercise.type}</span><br />
                          <span className="date-val">{workout.date.split('-')[2].substring(0, 2)}/{workout.date.split('-')[1]}/{workout.date.split('-')[0]} </span><br /><br />
                          <div className="card">
                            <h4><i className={workout.exercise.icon}></i>
                              <span className="stat-key">{workout.duration}mins</span><br />< br/>
                              <i className="fas fa-fire cal-burn"></i> {Math.round(workout.totalCaloriesBurned)}<span className="stat-unit">kCals</span></h4>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
          // <div className="columns is-multiline">
          //   {workoutArray.map(workout =>
          //     <div key={workout._id}>
          //
          //       <p>{workout.duration}</p>
          //       <p>{workout.date}</p>
          //       <p>{workout.exercise.type}</p>
          //       <p>{workout.exercise.intensity}</p>
          //       {
          //         <div>
          //           {isAuthenticated() && <Link to={`/workout/${workout._id}/edit`}><button>Edit</button></Link>}
          //         </div> }
          //     </div>
          //   )}
          // </div>

          :
          <p> Await your meal..</p>}
      </div>
    );
  }
}
