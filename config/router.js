const router = require('express').Router();
const authController = require('../controllers/authController');
const secureController = require('../controllers/secureController');
const foodController = require('../controllers/foodController');
const mealController = require('../controllers/mealController');
const userController = require('../controllers/userController');
const workoutController = require('../controllers/workoutController');

//user routes
router.route('/user/:id')
  .get(secureController, userController.show)
  .put(secureController, userController.update);

//workout routes
router.route('/workouts')
  .post(secureController, workoutController.create)
  .get(secureController, workoutController.index);

router.route('/workout/:id')
  .put(secureController, workoutController.update)
  .delete(secureController, workoutController.delete);

//food routes
router.route('/foods')
  .get(foodController.index)
  .post(foodController.create);

router.route('/food/:id')
  .put(foodController.update)
  .delete(foodController.delete);

//meal routes
router.route('/meals/:id')
  .get(secureController, mealController.show)
  .put(secureController, mealController.update)
  .delete(secureController, mealController.delete);

router.route('/meals')
  .post(secureController, mealController.create)
  .get(secureController, mealController.index);

// register route
router.route('/register')
  .post(authController.register);

// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
