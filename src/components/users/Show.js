import React from 'react';
import axios from 'axios';
import { decodeToken } from '../../lib/auth';

// import UserThumbnail from './UserThumbNail';
// import CalsInCalsOut from './CalsInCalsOut';
// import DailyProgress from './DailyProgress';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log('is this our id (decodetoken)?', decodeToken().sub);
    console.log('is this our id (this.props.match.params.id)?', this.props.match.params.id);
    axios.get(`/api/user/${this.props.match.params.id}`)
    //send token so user can access their dashboard.
      .then(res => {
        console.log('this.props.match.params.id is', this.props.match.params.id);
        console.log('res.data is', res.data);
        this.setState({ user: res.data });
      });
  }

  render(){
    const user = this.state.user;
    return(
      <div>
        Welcome to the Dashboard {user}.....
        this.props.match.params.id is {this.props.match.params.id}.....
      </div>
    );
  }
}
