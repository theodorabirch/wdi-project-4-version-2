
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import UserShow from './components/users/Show';
import UserEdit from './components/users/Edit';
import MealIndex from './components/meals/Index';
import MealShow from './components/meals/Show';
import MealEdit from './components/meals/Edit';
import WorkoutsIndex from './components/workouts/Index';
import WorkoutShow from './components/workouts/Show';
import FoodStore from './components/foods/Index';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/user/:id/edit' component={UserEdit}/>
            <Route path='/user/:id' component={UserShow}/>
            <Route path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/meals' component={MealIndex}/>
            <Route path='/meal/:id' component={MealShow}/>
            <Route path='/meal/:id/edit' component={MealEdit}/>
            <Route path='/user/:id/workout' component={WorkoutsIndex}/>
            <Route path='/user/:id/workout/:id' component={WorkoutShow}/>
            <Route path='/foods' component={FoodStore}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
