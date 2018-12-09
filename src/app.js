
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import UserShow from './components/users/Show';
import MealIndex from './components/meals/Index';
import MealShow from './components/meals/Show';
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
            <Route path='/user/:id' component={UserShow}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/user/:id/meals' component={MealIndex}/>
            <Route path='/user/:id/meal/:id' component={MealShow}/>
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
