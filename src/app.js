
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import './scss/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import UserShow from './components/users/Show';
import MealIndex from './components/meals/Index';
import MealShow from './components/meals/Show';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path ='/' component={Home}/>
              <Route exact path ='/dashboard' component={UserShow}/>
              <Route path ='/user/:id/meals' component={MealIndex}/>
              <Route path ='/user/:id/meal/:id' component={MealShow}/>
            </Switch>
          </main>
        </div>
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
