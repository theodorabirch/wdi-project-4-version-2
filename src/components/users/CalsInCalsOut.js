import React from 'react';

function CalsInCalsOut({ user }) {
  return(
    <div>
      <div>{ user.dailyCaloriesIn }</div>
      <div>{ user.dailyCaloriesOut }</div>
      <div>Todays Meals</div>
      {/* if user.meal.date === specifiedDay{} =>
      <ul>
        <li>{ user.meal.servings.quantity } x { user.meal.servings.food }</li>
      </ul> */}
      <div>Todays Exercises</div>
      {/* if user.exercise.date === specifiedDay{} =>
      <ul>
        <li>{ user.exercise.name }: { user.exercise.duration } </li>
      </ul> */}
    </div>
  );
}

export default CalsInCalsOut;
