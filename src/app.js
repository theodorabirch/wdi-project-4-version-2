import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import './scss/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '.components/Header';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path ='/' component={Home}/>
          </Switch>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);