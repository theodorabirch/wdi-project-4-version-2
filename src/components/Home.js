import React from 'react';
import { isAuthenticated, decodeToken } from '../lib/auth';

function Home() {
  return (
    <div className="container">
      <section className="hero is-info is-fullheight">
        <div className="hero-body homepage">
          <div className="container has-text-centered">
            <div className="container avocado ">
              <div className="container-name text column is-6 is-offset-3">
                <h1 className="title on-home">
                  AvoCardio
                </h1>
                <h2 className="subtitle">
                  {isAuthenticated() && <p> Welcome back {decodeToken().username}</p>}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Home;
