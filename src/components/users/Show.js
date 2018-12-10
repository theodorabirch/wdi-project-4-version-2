import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';

// import UserThumbnail from './UserThumbNail';
// import CalsInCalsOut from './CalsInCalsOut';
// import DailyProgress from './DailyProgress';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    axios.get(`/api/user/${this.props.match.params.id}`, authorizationHeader())
      .then(res => {
        (res.data.token);
        console.log('this.props.match.params.id is', this.props.match.params.id);
        console.log('res.data.token is', res.data.token);
        this.setState({ user: res.data });
      });
  }


  render(){
    // const user = this.state.user;
    return(
      <div>

      </div>
    );
  }
}
