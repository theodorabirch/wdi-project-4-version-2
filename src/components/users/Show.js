import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';


import UserThumbnail from './UserThumbNail';
import CalsInCalsOut from './CalsInCalsOut';
// import DailyProgress from './DailyProgress';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  componentDidMount(){
    console.log('mounting');
    axios.get(`/api/user/${this.props.match.params.id}`, authorizationHeader())
      .then(res => {
        (res.data.token);
        this.setState({ user: res.data }, console.log('here'));
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
            <div>
              <article className="post">
                <div className="container">

                  <div className="columns">

                    <div className="item">
                      <h4 className="item-title">This is the UserThumbnail</h4>
                      <UserThumbnail user={user} />
                    </div>
                  </div>
                </div>
              </article>

              <article className="post">
                <div className="container">
                  <h3>Your Daily Statistics</h3>
                  <div className="columns quarters">

                    <div className="item">
                      <h4 className="item-title">Calories In</h4>
                      <CalsInCalsOut user={user} />
                      <p>Lorem Ipsum</p>
                      <div className="social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>

                    <div className="item">
                      <h4 className="item-title">Calories Out</h4>
                      <p>Lorem Ipsum</p>
                      <div className="social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>

                    <div className="item">
                      <h4 className="item-title">Calories In/Out Chart</h4>
                      <p>Lorem Ipsum</p>
                      <div className="social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>

                    <div className="item">
                      <h4 className="item-title">Calories In/Out Chart</h4>
                      <p>Lorem Ipsum</p>
                      <div className="social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>

                    <div className="item">
                      <h4 className="item-title">Last Meal</h4>
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
                      <h4 className="item-title">Sleep</h4>
                      <p>Lorem Ipsum</p>
                      <div className="social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>

                    <div className="item">
                      <h4 className="item-title">Water</h4>
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
      </div>
    );
  }
}
