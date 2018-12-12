import React from 'react';
import { isAuthenticated } from '../../lib/auth';
import { Link } from 'react-router-dom';

function UserThumbnail({ user }) {
  console.log('this is user', user);

  return(
    <div>
      <div className='container profile'>
        <div className='section profile-heading'>
          <div className='columns is-mobile is-multiline'>

            <div className='column is-2'>
              <span className='header-icon user-profile-image'>
                <img src={ user.profilePicture } alt={ user.username } />
              </span>
            </div>

            <div className='column is-2-tablet is-10-mobile name'>
              <p>
                <span className='title is-bold'>{ user.forename } { user.surname }</span>
                <div className='button is-primary is-outlined' style='margin: 5px 0'>
                  {isAuthenticated() && <Link to={`/user/${user._id}/edit`}><button>Edit Profile</button></Link>}
                </div>
              </p>

              <p className='tagline'>
                Lorem Ipsum Godum Helpus Thiseo Projectiae Es Killingus
              </p>
            </div>
            <div className='column is-2-tablet is-4-mobile has-text-centered'>
              <p className='stat-val'>{ user.height }cm</p>
              <p className='stat-key'>Height</p>
            </div>
            <div className='column is-2-tablet is-4-mobile has-text-centered'>
              <p className='stat-val'>{ user.weight }kg</p>
              <p className='stat-key'>Weight</p>
            </div>
            <div className='column is-2-tablet is-4-mobile has-text-centered'>
              <p className='stat-val'>{ user.BMI }</p>
              <p className='stat-key'>BMI</p>
            </div>
            <div className='column is-2-tablet is-4-mobile has-text-centered'>
              <p className='stat-val'>{ user.bodyFat }</p>
              <p className='stat-key'>Body Fat</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserThumbnail;
