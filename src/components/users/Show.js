import React from 'react';
import axios from 'axios';


export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    axios.get(`/api/user/${this.props.match.params.id}`)
      .then(res => {
        console.log('this.props.match.params.id is', this.props.match.params.id);
        console.log('res.data is', res.data);
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
