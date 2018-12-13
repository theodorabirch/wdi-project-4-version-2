import React from 'react';
import axios from 'axios';
import { authorizationHeader, isAuthenticated, deleteToken } from '../../lib/auth';


import UserThumbnail from './UserThumbNail';
import TodaysMeals from './TodaysMeals';
import TodaysWorkouts from './TodaysWorkouts';
import CalsIn from './CalsIn';
import CalsOut from './CalsOut';
// import DailyProgress from './DailyProgress';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }


  componentDidMount(){
    console.log('mounting');
    axios.get(`/api/user/${this.props.match.params.id}`, authorizationHeader())
      .then(res => {
        (res.data.token);
        this.setState({ user: res.data }, console.log('here'));
      });
  }

  handleDelete(event) {
    event.preventDefault();
    axios.delete(`/api/user/${this.state.user._id}`, authorizationHeader())
      .then(() => {
        deleteToken();
        this.props.history.push('/');
      });
  }

  render() {
    // const date = this.state.user;
    const user = this.state.user;

    return(
      <div>
        <div>
          {user
            ?

            <div className="container">
              <div className="columns">

                <div className="column is-12 is-multiline">

                  <section className="hero is-info welcome is-small">
                    <div className="avocado-body">
                      <div className="container">
                        <h1 className="title">
                          <UserThumbnail user={user} />
                          {isAuthenticated() && <button className="button is-link modal-button" onClick={this.handleDelete}>Delete Account</button>}
                        </h1>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div id="datebar" className='box has-text-centered'>
                      <div className='has-text-centered'>
                        <p className='has-text-centered'>
                          <button> <i className="fas fa-chevron-left"> </i></button>
                          <strong>     13 / 12 / 2018     </strong>
                          <button> <i className="fas fa-chevron-right"> </i></button>
                        </p>
                      </div>

                    </div>
                  </section>

                  <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                      <div className="tile is-parent">
                        <article id="square" className="tile is-child box">
                          <CalsIn user={user} />
                          <p>
                            <i className="fas fa-tachometer-alt meter"></i>
                          </p>
                          <p className="subtitle">Calories In</p>
                        </article>
                      </div>

                      <div className="tile is-parent">
                        <article id="square" className="tile is-child box">
                          <CalsOut user={user} />
                          <p>
                            <i className="fas fa-tachometer-alt meter"></i>
                          </p>
                          <p className="subtitle">Calories Out</p>
                        </article>
                      </div>

                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">Chart.js</p>
                          <p className="subtitle">Daily Progress</p>
                          <div className="todays-meals">
                            <div className="card">
                              <img src="https://imgur.com/XpUgXTi.png"/>
                            </div>
                          </div>
                        </article>
                      </div>



                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">Chart.js</p>
                          <p className="subtitle">Macronutrients</p>
                          <div className="todays-meals">
                            <div className="card">
                              <img src="https://imgur.com/XpUgXTi.png"/>
                            </div>
                          </div>
                        </article>
                      </div>


                    </div>
                  </section>


                  <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">

                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">4</p>
                          <p className="subtitle">Meals</p>
                          <TodaysMeals user={user} />
                        </article>
                      </div>

                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">2</p>
                          <p className="subtitle">Workouts</p>
                          <TodaysWorkouts user={ user} />
                        </article>
                      </div>

                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">7h 45</p>
                          <p className="subtitle">Sleep</p>
                          <div className="todays-meals">
                            <div className="card">
                              <img src="https://imgur.com/a8w9daN.png"/>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">2250ml</p>
                          <p className="subtitle">Water</p>
                          <div className="todays-meals">
                            <div className="card">
                              <img src="https://image.flaticon.com/icons/png/512/432/432257.png"/>
                            </div>
                          </div>
                        </article>
                      </div>


                    </div>
                  </section>




                </div>
              </div>
            </div>

            :
            <p> Please wait..</p>}
        </div>
      </div>
    );
  }
}

// getCalories() {
//   const calories = this.state.user.meals;
//   console.log('this is the calories', calories);
//   axios.get(`/api/user/${this.props.match.params.id}`)
//     .then(res => {
//       (res.data.meals);
//       this.setState({ meal: res.data }, console.log('these are the meals of the user', res.data));
//     });
// }
