import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authorizationHeader, isAuthenticated } from '../../lib/auth';


export default class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting');
    axios.get('/api/foods', authorizationHeader())
      .then(res => {
        this.setState({ foods: res.data }, () => {
          console.log('res.data is', res.data);
          console.log('this.state.meals', this.state.foods );
        });
      });
  }

  render() {
    const foodArray = this.state.foods;

    return(
      <div>
        {foodArray
          ?
          <div className="columns is-multiline">
            <section className="container index-container">

              <div className="columns is-multiline features">
                {foodArray.map(food =>
                  <div key={food._id} className="column is-4">
                    <div className="card is-shady">

                      <div className="card-image">
                        <figure className="image is-4by4">
                          {isAuthenticated() && <Link to={`/foods/${food._id}`}>
                            <img src={food.image} alt="Placeholder image" className="modal-button" data-target="modal-image2"/>
                          </Link>}

                        </figure>
                      </div>

                      <div className="card-content index-content">
                        <div className="content">
                          <span className="stat-val">{food.name}</span><br />
                          <span className="date-val">Nutritional Information /100g</span><br /><br />
                          <div className="card">
                            <h4><i className="fas fa-fire cal-burn"></i> {food.kCalsPer100g}<span className="stat-unit">kCals</span></h4>
                            <div className="servings" >
                              <span><i className="fas fa-dumbbell"></i> Protein: {food.proteinPer100g}</span><br />
                              <span><i className="fas fa-birthday-cake"></i> Carbohydrate: {food.carbsPer100g}</span><br />
                              <span><i className="fas fa-piggy-bank"></i> Fat: {food.fatPer100g}</span>
                            </div>

                            {isAuthenticated() && <Link className="button is-link modal-button" to={`/foods/${food._id}/edit`}>Edit</Link>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          :

          <p> Await your foods...</p>}
      </div>
    );
  }
}
