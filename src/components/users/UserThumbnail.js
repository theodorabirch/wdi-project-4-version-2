import React from 'react';



function UserThumbnail({ user }) {
  return(
    <div>
      <img src="{user.profilePicture }"/>
      <div>
        <span> { user.forename } {user.surname }</span>
        <span> { user.username }</span>
        <span> { user.age }</span>
        <i className="fas fa-{user.sex}"></i>
      </div>
      <div>
        <div>Height: { user.height }cm</div>
        <div>Weight: { user.weight }kg</div>
        <div>BMI: { user.BMI } </div>
        <div></div>
      </div>
    </div>
  );
}

export default UserThumbnail;
