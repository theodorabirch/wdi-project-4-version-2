import React from 'react';
import { isAuthenticated } from '../../lib/auth';
import { Link } from 'react-router-dom';

function UserThumbnail({ user }) {
  console.log('this is user', user);

  return(
    <div>
      <div className="stat-box">
        <img src={ user.profilePicture } alt={ user.username } className="item-image" />
      </div>

      <div className="stat-box">
        <div><span>{ user.forename }</span> <span>{ user.surname }</span> <i className="fas fa-{user.sex}"></i></div>
        <div>{ user.username }</div>
        <div>{ user.age }</div>
      </div>

      <div className="stat-box">
        <h3>Height</h3>
        <div>{ user.height }cm</div>
      </div>

      <div className="stat-box">
        <h3>Weight</h3>
        <div>{ user.weight }kg</div>
      </div>

      <div className="stat-box">
        <h3>BMI</h3>
        <div>{ user.BMI }</div>
      </div>

      <div className="stat-box">
        <h3>BodyFat</h3>
        <div>{ user.bodyFat }%</div>
      </div>
      <div>
        {isAuthenticated() && <Link to={`/user/${user._id}/edit`}><button>Edit the user</button></Link>}
      </div>
    </div>
  );
}

export default UserThumbnail;
