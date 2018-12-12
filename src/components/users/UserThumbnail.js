import React from 'react';
import { isAuthenticated } from '../../lib/auth';
import { Link } from 'react-router-dom';

function UserThumbnail({ user }) {
  console.log('this is user', user);

  return(
    <div>

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
              <span className='button is-primary is-outlined'>
                {isAuthenticated() && <Link to={`/user/${user._id}/edit`}><button>Edit Profile</button></Link>}
              </span>
            </p>

            <p className='plaintext'>
              Lorem Ipsum Goodus Godus Helpus Thiseo Projectiae Es Killingus
            </p>
          </div>


          <div className='column is-2-tablet is-4-mobile has-text-centered'>
            <p className='stat-val'>{ user.height }
              <span className='stat-unit'> cm</span>
            </p>
            <p className='stat-key'>Height</p>
            <i className="fas fa-angle-double-up"></i>
          </div>

          <div className='column is-2-tablet is-4-mobile has-text-centered'>
            <p className='stat-val'>{ user.weight }
              <span className='stat-unit'> kg</span>
            </p>
            <p className='stat-key'>Weight</p>
            <i className="fas fa-weight"></i>
          </div>

          <div className='column is-2-tablet is-4-mobile has-text-centered'>
            <p className='stat-val'>{ user.bodyFat }
              <span className='stat-unit'> %</span>
            </p>
            <p className='stat-key'>Body Fat</p>
            <i className="fas fa-tape"></i>
          </div>

          <div className='column is-2-tablet is-4-mobile has-text-centered'>
            <p className='stat-val'>{ user.BMI }</p>
            <p className='stat-key'>BMI</p>
            <i className="fas fa-heartbeat"></i>
          </div>



        </div>
      </div>


    </div>
  );
}

export default UserThumbnail;
