// import React from 'react';
// import axios from 'axios';
// import { handleChange } from '../../lib/common';
// import FoodForm from './FoodForm';
//
// export default class BurgerNew extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.handleChange = handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     console.log('Submit handled', this.state);
//     axios.post('/api/burgers', this.state)
//       .then(() => this.props.history.push('/burgers'));
//   }
//
//   render() {
//     return(
//       <section>
//         <h2 className="title is-2">Add a Food</h2>
//         <BurgerForm
//           handleChange = {this.handleChange}
//           handleSubmit = {this.handleSubmit}
//         />
//       </section>
//     );
//   }
// }
