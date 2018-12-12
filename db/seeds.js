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

const exerciseIds = [
  '5c0910e9b7c0eb472d098b41',
  '5c0910e9b7c0eb472d098b42',
  '5c0910e9b7c0eb472d098b43'
];

const foodIds = [
  '5c0910e9b7c0eb472d098b3e',
  '5c0910e9b7c0eb472d098b3f',
  '5c0910e9b7c0eb472d098b40'
];

const userData = [
  {
    _id: userIds[0],
    username: 'janedoe',
    email: 'jane@app.com',
    password: 'pass',
    profilePicture: 'https://i.imgur.com/0evCpud.jpg',
    forename: 'Jane',
    surname: 'Doe',
    age: 30,
    sex: 'Female',
    height: 161.6,
    weight: 70.2,
    bodyFat: 23
  }, {
    _id: userIds[1],
    username: 'johndoe',
    email: 'john@app.com',
    password: 'pass',
    profilePicture: 'https://i.imgur.com/0evCpud.jpg',
    forename: 'John',
    surname: 'Doe',
    age: 30,
    sex: 'Male',
    height: 175.3,
    weight: 83.6,
    bodyFat: 14
  }
];

const foodData = [
  {
    _id: foodIds[0],
    name: 'Chocolate Almonds',
    kCalsPer100g: 594,
    proteinPer100g: 18.0,
    carbsPer100g: 28.0,
    fatPer100g: 48.0
  },
  {
    _id: foodIds[1],
    name: 'Yoghurt',
    kCalsPer100g: 63,
    proteinPer100g: 5.3,
    carbsPer100g: 7.0,
    fatPer100g: 1.5
  },
  {
    _id: foodIds[2],
    name: 'Avocado',
    kCalsPer100g: 227,
    proteinPer100g: 2.7,
    carbsPer100g: 2.8,
    fatPer100g: 21.0
  },
  {
    _id: foodIds[3],
    name: 'Egg',
    kCalsPer100g: 143,
    proteinPer100g: 13.0,
    carbsPer100g: 0.3,
    fatPer100g: 9.5
  },
  {
    _id: foodIds[4],
    name: 'Smoked Salmon',
    kCalsPer100g: 117,
    proteinPer100g: 18.0,
    carbsPer100g: 0.0,
    fatPer100g: 4.3
  },
  {
    _id: foodIds[5],
    name: 'Gouda',
    kCalsPer100g: 356,
    proteinPer100g: 25.0,
    carbsPer100g: 2.2,
    fatPer100g: 27.0
  }
];


const mealData = [
  {
    user: userIds[1],
    name: 'Breakfast',
    date: '2018-12-06T00:00:00.009Z',
    servings: [{
      food: foodIds[1],
      quantity: 2
    }, {
      food: foodIds[0],
      quantity: 3
    }]
  }, {
    user: userIds[1],
    name: 'Snack',
    date: '2018-12-05T00:00:00.009Z',
    servings: [{
      food: foodIds[1],
      quantity: 1
    }]
  }, {
    user: userIds[0],
    name: 'Breakfast',
    date: '2018-12-05T00:00:00.009Z',
    servings: [{
      food: foodIds[1],
      quantity: 50
    }]
  }
];

const exerciseData = [
  {
    _id: exerciseIds[0],
    type: 'Cycling',
    intensity: 7.5,
    icon: 'fas fa-bicycle'
  }, {
    _id: exerciseIds[1],
    type: 'Jogging',
    intensity: 7.0,
    icon: 'fas fa-running'
  }, {
    _id: exerciseIds[2],
    type: 'Swimming (Freestyle)',
    intensity: 5.8,
    icon: 'fas fa-swimmer'
  }
];

const workoutData = [
  {
    user: userIds[0],
    date: '2018-12-05T00:00:00.009Z',
    exercise: exerciseIds[0],
    duration: 60
  }, {
    user: userIds[1],
    date: '2018-12-06T00:00:00.009Z',
    exercise: exerciseIds[1],
    duration: 60
  }
];

mongoose.connect(dbURI);
User.collection.drop();
Food.collection.drop();
Meal.collection.drop();
Exercise.collection.drop();
Workout.collection.drop();


User.create(userData)
  .then(users => {
    console.log(`${users.length} users created`);

    Food.create(foodData)
      .then(foods => {
        console.log(`${foods.length} foods created`);

        Meal.create(mealData)
          .then(meals => {
            console.log(`${meals.length} meals created`);

            Exercise.create(exerciseData)
              .then(exercises => {
                console.log(`${exercises.length} exercises created`);

                Workout.create(workoutData)
                  .then(workouts => {
                    console.log(`${workouts.length} workouts created`);

                    mongoose.connection.close();

                  });
              });
          });
      });
  });
