const router = require('express').Router();
const authController = require('../controllers/authController');
// const authController = require('../controllers/authController');
// const secureController = require('../controllers/secureController');
const foodController = require('../controllers/foodController');
const mealController = require('../controllers/mealController');
const userController = require('../controllers/userController');
const workoutController = require('../controllers/workoutController');

//user routes
router.route('/user/:id')
  .get(userController.show)
  .put(userController.update);

//workout routes
router.route('/workouts')
  .post(workoutController.create);

router.route('/workout/:id')
  .get(workoutController.show)
  .put(workoutController.update)
  .delete(workoutController.delete);

//food routes
router.route('/foods')
  .get(foodController.index)
  .post(foodController.create);

router.route('/food/:id')
  .get(foodController.show)
  .put(foodController.update)
  .delete(foodController.delete);

//meal routes
router.route('/meals/:id')
  .get(mealController.show)
  .put(mealController.update)
  .delete(mealController.delete);

router.route('/meals')
  .post(mealController.create);

// register route
router.route('/register')
  .post(authController.register);

// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
