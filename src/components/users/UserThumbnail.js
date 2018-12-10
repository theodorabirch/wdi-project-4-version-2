import React from 'react';



function UserThumbnail({ user }) {
  return(
    <div>
      <div className="stat-box">
        <img src="{user.profilePicture }" alt="Sample Image" className="item-image" />
      </div>

      <div className="stat-box">
        <div><span>{ user.forename }</span> <span>{user.surname }</span> <i className="fas fa-{user.sex}"></i></div>
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
        <div>user.bodyFat</div>
      </div>
    </div>
  );
}

export default UserThumbnail;
