const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Exercise = require('../models/exercise');
const Food = require('../models/food');
const Meal = require('../models/meal');
const User = require('../models/user');
const Workout = require('../models/workout');

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];


const exerciseData = [
  {
    type: 'Cycling',
    intensity: 7.5
  }, {
    type: 'Jogging',
    intensity: 7.0
  }, {
    type: 'Swimming (Freestyle)',
    intensity: 5.8
  }
];

const foodData = [
  {
    name: 'Chocolate Almonds',
    kCalsPer100g: 594,
    proteinPer100g: 18,
    carbsPer100g: 28,
    fatPer100g: 48
  }, {
    name: 'Yoghurt',
    kCalsPer100g: 63,
    proteinPer100g: 5.3,
    carbsPer100g: 7,
    fatPer100g: 1.5
  }
];

const mealData = [
  {
    user: userIds[1],
    name: 'Breakfast',
    date: '2018-12-06T00:00:00.009Z',
    serving: {
      food: 'Yoghurt',
      quantity: 2
    }
  }, {
    user: userIds[0],
    name: 'Snack',
    date: '2018-12-05T00:00:00.009Z',
    serving: {
      food: 'Chocolate Almonds',
      quantity: 1
    }
  }
];

const userData = [
  {
    _id: userIds[0],
    username: 'janedoe',
    email: 'jane@app.com',
    password: 'pass',
    profilePicture: '',
    forename: 'Jane',
    surname: 'Doe',
    age: 30,
    sex: 'Female',
    height: 161.6,
    weight: 70.2
  }, {
    _id: userIds[1],
    username: 'johndoe',
    email: 'john@app.com',
    password: 'pass',
    profilePicture: '',
    forename: 'John',
    surname: 'Doe',
    age: 30,
    sex: 'Male',
    height: 175.3,
    weight: 83.6
  }
];

const workoutData = [
  {
    user: userIds[0],
    date: '2018-12-05T00:00:00.009Z',
    exercise: 'Cycling',
    duration: 60
  }, {
    user: userIds[1],
    date: '2018-12-06T00:00:00.009Z',
    exercise: 'Jogging',
    duration: 60
  }
];

mongoose.connect(dbURI);
Exercise.collection.drop();
Food.collection.drop();
Meal.collection.drop();
User.collection.drop();
Workout.collection.drop();

Exercise.create(exerciseData)
  .then(exercises => {
    console.log(`${exercises.length} exercises created`);

    Food.create(foodData)
      .then(foods => {
        console.log(`${foods.length} foods created`);

        User.create(userData)
          .then(users => {
            console.log(`${users.length} users created`);

            Meal.create(mealData)
              .then(meals => {
                console.log(`${meals.length} meals created`);

                Workout.create(workoutData)
                  .then(workouts => {
                    console.log(`${workouts.length} workouts created`);

                    mongoose.connection.close();

                  });
              });
          });
      });
  });
