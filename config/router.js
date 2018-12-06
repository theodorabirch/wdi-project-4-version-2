const router = require('express').Router();
const authController = require('../controllers/authController');
const secureController = require('../controllers/secureController');
const foodController = require('../controllers/foodController');
const mealController = require('../controllers/mealController');
const userController = require('../controllers/userController');
const workoutController = require('../controllers/workoutController');

//user routes
router.route('/user/:id')
  .get(secureController.secure, userController.show)
  .put(secureController.secure, userController.update);

//workout routes
router.route('/workouts')
  .post(secureController.secure, workoutController.create)
  .get(secureController.secure, workoutController.index);

router.route('/workout/:id')
  .put(secureController.secure, workoutController.update)
  .delete(secureController.secure, workoutController.delete);

//food routes
router.route('/foods')
  .get(secureController.secure,foodController.index)
  .post(secureController.secure,foodController.create);

router.route('/food/:id')
  .put(secureController.secure,foodController.update)
  .delete(secureController.secure, foodController.delete);

//meal routes
router.route('/meals/:id')
  .get(secureController.secure, mealController.show)
  .put(secureController.secure, mealController.update)
  .delete(secureController.secure, mealController.delete);

router.route('/meals')
  .post(secureController.secure, mealController.create)
  .get(secureController.secure, mealController.index);

// register route
router.route('/register')
  .post(authController.register);

// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
