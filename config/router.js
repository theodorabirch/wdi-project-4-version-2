const router = require('express').Router();
const authController = require('../controllers/authController');
const secureController = require('../controllers/secureController');
const foodController = require('../controllers/foodController');
const mealController = require('../controllers/mealController');
const userController = require('../controllers/userController');
const workoutController = require('../controllers/workoutController');
const servingController = require('../controllers/servingController');
const secureRoute = secureController.secure;

//user routes
router.route('/user/:id')
  .get(secureRoute, userController.show)
  .put(secureRoute, userController.update)
  .delete(secureRoute, userController.delete);

//workout routes
router.route('/user/:id/workouts')
  .post(secureRoute, workoutController.create)
  .get(secureRoute, workoutController.index);

router.route('/user/:id/workout/:id')
  .put(secureRoute, workoutController.update)
  .delete(secureRoute, workoutController.delete)
  .get(secureRoute, workoutController.show);

router.route('/user/:id/workouts/:year/:month/:day')
  .get(secureRoute, workoutController.dayShow);

//food routes
router.route('/foods')
  .get(secureRoute,foodController.index)
  .post(secureRoute,foodController.create);

router.route('/food/:id')
  .put(secureRoute,foodController.update)
  .delete(secureRoute, foodController.delete);

//meal routes
router.route('/user/:id/meals/:year/:month/:day')
  .get(secureRoute, mealController.dayShow);

router.route('/meal/:id')
  .get(secureRoute, mealController.show)
  .put(secureRoute, mealController.update)
  .delete(secureRoute, mealController.delete);

router.route('/meals')
  .post(secureRoute, mealController.create)
  .get(secureRoute, mealController.index);

//servings create route
router.route('/meals/:mealId/servings')
  .post(secureRoute, servingController.create);

//servings delete route
router.route('/meals/:mealId/servings/:servingId')
  .delete(secureRoute, servingController.delete);

//servings update route
router.route('/meals/:mealId/servings/:servingId')
  .put(secureRoute, servingController.update);

// register route
router.route('/register')
  .post(authController.register);

// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
