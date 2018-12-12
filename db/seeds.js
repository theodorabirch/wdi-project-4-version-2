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
  '5c0910e9b7c0fb472d098b40',
  '5c0910e9b7c0fb472d098b41',
  '5c0910e9b7c0fb472d098b42',
  '5c0910e9b7c0fb472d098b43',
  '5c0910e9b7c0fb472d098b44',
  '5c0910e9b7c0fb472d098b45',
  '5c0910e9b7c0fb472d098b46',
  '5c0910e9b7c0fb472d098b47',
  '5c0910e9b7c0fb472d098b48',
  '5c0910e9b7c0fb472d098b4a',
  '5c0910e9b7c0fb472d098b4b',
  '5c0910e9b7c0fb472d098b4c',
  '5c0910e9b7c0fb472d098b4d',
  '5c0910e9b7c0fb472d098b4e',
  '5c0910e9b7c0fb472d098b4f'
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
    fatPer100g: 48.0,
    image: 'https://imgur.com/jxd7L1U.png'
  },
  {
    _id: foodIds[1],
    name: 'Yoghurt',
    kCalsPer100g: 63,
    proteinPer100g: 5.3,
    carbsPer100g: 7.0,
    fatPer100g: 1.5,
    image: 'https://imgur.com/r5BjxIg.png'
  },
  {
    _id: foodIds[2],
    name: 'Avocado',
    kCalsPer100g: 227,
    proteinPer100g: 2.7,
    carbsPer100g: 2.8,
    fatPer100g: 21.0,
    image: 'https://imgur.com/VTgjMhh.png'
  },
  {
    _id: foodIds[3],
    name: 'Egg',
    kCalsPer100g: 143,
    proteinPer100g: 13.0,
    carbsPer100g: 0.3,
    fatPer100g: 9.5,
    image: 'https://imgur.com/WDmqWDE.png'
  },
  {
    _id: foodIds[4],
    name: 'Smoked Salmon',
    kCalsPer100g: 117,
    proteinPer100g: 18.0,
    carbsPer100g: 0.0,
    fatPer100g: 4.3,
    image: 'https://imgur.com/sIKX1RR.png'
  },
  {
    _id: foodIds[5],
    name: 'Gouda',
    kCalsPer100g: 356,
    proteinPer100g: 25.0,
    carbsPer100g: 2.2,
    fatPer100g: 27.0,
    image: 'https://imgur.com/Vxg8BhE.png'
  },
  {
    _id: foodIds[6],
    name: 'Apple',
    kCalsPer100g: 52,
    proteinPer100g: 0.3,
    carbsPer100g: 14.0,
    fatPer100g: 0.2,
    image: 'https://imgur.com/Vxg8BhE.png'
  },
  {
    _id: foodIds[7],
    name: 'Sourdough Bread',
    kCalsPer100g: 272,
    proteinPer100g: 11,
    carbsPer100g: 52.0,
    fatPer100g: 2.4,
    image: 'https://imgur.com/IADEAC6.png'
  },
  {
    _id: foodIds[8],
    name: 'Tomato',
    kCalsPer100g: 18,
    proteinPer100g: 0.9,
    carbsPer100g: 3.9,
    fatPer100g: .2,
    image: 'https://imgur.com/kxKVafa.png'
  },
  {
    _id: foodIds[9],
    name: 'Chicken Breast',
    kCalsPer100g: 165,
    proteinPer100g: 31.0,
    carbsPer100g: 0,
    fatPer100g: 3.6,
    image: 'https://imgur.com/tDXMGGs.png'
  },
  {
    _id: foodIds[10],
    name: 'Bacon Rashers',
    kCalsPer100g: 468,
    proteinPer100g: 34.0,
    carbsPer100g: 1.7,
    fatPer100g: 35.0,
    image: 'https://imgur.com/nMG3LlW.png'
  },
  {
    _id: foodIds[11],
    name: 'Spaghetti',
    kCalsPer100g: 150,
    proteinPer100g: 5.3,
    carbsPer100g: 30,
    fatPer100g: 0.6,
    image: 'https://imgur.com/TYdAXOM.png'
  },
  {
    _id: foodIds[12],
    name: 'Butter',
    kCalsPer100g: 717,
    proteinPer100g: 0.8,
    carbsPer100g: 0.2,
    fatPer100g: 81.0,
    image: 'https://imgur.com/1zXMgs6.png'
  },
  {
    _id: foodIds[13],
    name: 'Lemon',
    kCalsPer100g: 29,
    proteinPer100g: 1.1,
    carbsPer100g: 9.3,
    fatPer100g: 0.3,
    image: 'https://imgur.com/SjkC5Qz.png'
  }
];


const mealData = [
  {
    user: userIds[1],
    name: 'Breakfast',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[1],
      quantity: 2.5
    }, {
      food: foodIds[6],
      quantity: 1.5
    }, {
      food: foodIds[13],
      quantity: .5
    }]
  }, {
    user: userIds[1],
    name: 'Lunch',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[7],
      quantity: 1.7
    }, {
      food: foodIds[5],
      quantity: .6
    }, {
      food: foodIds[8],
      quantity: .9
    }]
  }, {
    user: userIds[1],
    name: 'Dinner',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[11],
      quantity: 2.1
    },{
      food: foodIds[10],
      quantity: .6
    },{
      food: foodIds[3],
      quantity: 1.5
    },{
      food: foodIds[12],
      quantity: .4
    }]
  }, {
    user: userIds[1],
    name: 'Snack',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[0],
      quantity: 1.5
    }]
  }, {
    user: userIds[0],
    name: 'Breakfast',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[8],
      quantity: 1.6
    }, {
      food: foodIds[3],
      quantity: 2
    }]
  }, {
    user: userIds[0],
    name: 'Lunch',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[4],
      quantity: 1
    }, {
      food: foodIds[3],
      quantity: 1.5
    }, {
      food: foodIds[2],
      quantity: 1.3
    }]
  }, {
    user: userIds[0],
    name: 'Dinner',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[5],
      quantity: 3
    }]
  }, {
    user: userIds[0],
    name: 'Snack',
    date: '2018-12-13T00:00:00.009Z',
    servings: [{
      food: foodIds[6],
      quantity: 2
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
