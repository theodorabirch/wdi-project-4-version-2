import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
import UserThumbnail from '../users/UserThumbNail';


export default class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting');
    axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients/', authorizationHeader())
      .then(res => {
        (res.data.token);
        this.setState({ user: res.data });
      });
  }

  render() {
    const user = this.state.user;
    return(
      <div>
        {user
          ?
          <div>
            <article className="post">
              <div className="container">
                <div className="columns">
                  <div className="item">
                    <h4 className="item-title">FoodStore</h4>
                    <UserThumbnail user={user} />
                  </div>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="container">
                <h3>The Food Store</h3>
                <div className="columns quarters">
                  <div className="item"> <h4 className="item-title">Exercise</h4>
                    <h1>Food</h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">MET</h4>
                    <h1><i className="fas fa-bicycle"></i></h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">???</h4>
                    <h1>???</h1>
                    <div className="social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">???</h4>
                    <p>XXX</p>
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
          <p><img src="https://media.giphy.com/media/uWcs07J0OelqwWLWCn/giphy.gif" /></p>}
      </div>
    );
  }
}
