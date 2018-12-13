import React from 'react';

export default function TodaysWorkouts({ user }) {
  console.log('this is user.workouts', user.workouts);
  return(
    <div>

      <div className="todays-meals">
        {user.workouts.map(workout =>
          <div className="card" key={workout._id}>
            <p className="keyname">{workout.exercise.type} <i className={workout.exercise.icon}></i></p>
            <p className="valuename"><i className="fas fa-fire cal-burn"></i>{Math.round(workout.totalCaloriesBurned)}<span className="stat-unit">kCals</span></p><br />
          </div>
        )}
      </div>

    </div>
  );
}




/* //at the top of the page have a div tat returns todays Date
//the back button takes away one day to todays date
//the forward button adds one day

//the contentes of this div is used as the argument for the requested day function ie:
// year - month - day

// //so on each pagem we use the printed date at the top to feed into the function that tells us whic meals been eaten
// function CalsInCalsOut user
//   return(
//     //let an array of meals
//     let requestedDay = ;
//     //get Date
//     codecodecode
//
//
//   // in the constructor for userShow, on the state we can return todays date so that he page knows what the date is
//   // on componentdidmount and tell it to return the meals on that date.
//
//
//     //push meals on this date into array
//     .filter
//   )
// } */
