import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
// import UserThumbnail from '../users/UserThumbNail';
import MealLayout from './Layout';


export default class MealsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting');
    axios.get(`/api/user/${this.props.match.params.id}/meals`, authorizationHeader())
      .then(res => {
        (res.data.token);
        this.setState({ userMeals: res.data });
      });
  }

  render() {
    const userMeals = this.state.userMeals;
    console.log('this is this.state.user', this.state.user);
    return(
      <div>
        {userMeals
          ?
          <div className="columns is-multiline">
            {this.state.meals.map(meal => <MealLayout key={meal._id} meal={meal}/>)}
          </div>

          :
          <p> Please wait..</p>}
      </div>
    );
  }
}
