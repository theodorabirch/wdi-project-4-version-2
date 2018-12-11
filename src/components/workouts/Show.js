import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
import UserThumbnail from '../users/UserThumbNail';


export default class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting');
    axios.get(`/api/user/${this.props.match.params.id}/workouts`, authorizationHeader())
      .then(res => {
        (res.data.token);
        this.setState({ user: res.data });
      });
  }

  render() {
    const user = this.state.user;
    console.log('this is user', user);
    console.log('this is this.state.user', this.state.user);
    return(
      <div>
        {user
          ?
          <div>
            <article className="post">
              <div className="container">
                <div className="columns">
                  <div className="item">
                    <h4 className="item-title">This is the UserThumbnnail</h4>
                    <UserThumbnail user={user} />
                  </div>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="container">
                <h3>Your Workouts</h3>
                <div className="columns quarters">
                  <div className="item"> <h4 className="item-title">Workout</h4>
                    <h1>Cycling</h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Workout</h4>
                    <h1><i className="fas fa-bicycle"></i></h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Duration</h4>
                    <h1>60 mins</h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Calories Burned</h4>
                    <p>totalCaloriesBurned(): 520</p>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">??</h4>
                    <p>Lorem Ipsum</p>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Last Exercise</h4>
                    <p>Lorem Ipsum</p>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">???</h4>
                    <p>Lorem Ipsum</p>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">???</h4>
                    <p>Lorem Ipsum</p>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          :
          <p> Please wait..</p>}
      </div>
    );
  }
}
