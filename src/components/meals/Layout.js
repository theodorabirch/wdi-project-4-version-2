import React from 'react';
// import { Link } from 'react-router-dom';
// import UserThumbnail from '../users/UserThumbNail';

function MealLayout({ meal }) {
  return (
    <div>
      <article className="post">
        <div className="container">
          <div className="columns">
            <div className="item">
              <h4 className="item-title">This is the UserThumbnnail</h4>
              {/* <UserThumbnail user={user} /> */}
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <div className="container">
          <h3>Your Meals</h3>
          <div className="columns quarters">
            <div className="item"> <h4 className="item-title">Meals</h4>
              <h1>Breakfast</h1>
              <div className="social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
              </div>
            </div>
            <div className="item">
              <h4 className="item-title">XXX</h4>
              <h1><i className="fas fa-bicycle"></i></h1>
              <div className="social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
              </div>
            </div>
            <div className="item">
              <h4 className="item-title">YYY</h4>
              <h1>60 mins</h1>
              <div className="social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
              </div>
            </div>
            <div className="item">
              <h4 className="item-title">ZZZ</h4>
              <p></p>
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
  );
}

export default MealLayout;
