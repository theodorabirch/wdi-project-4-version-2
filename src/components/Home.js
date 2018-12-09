import React from 'react';


function Home() {
  return (
    <div className="container">
      <header>
        <h2>Avocardio</h2>
      </header>

      <div className="cover">
        <h1>HOME PAGE CONTENT TO GO HERE</h1>
        <form  className="flex-form">
          <label htmlFor ="from">
            <i className="ion-location"></i>
          </label>
          <input type="search" placeholder="Get fit"/>
          <input type="submit" value="Search"/>
        </form>
        <div>
          
        </div>
      </div>

    </div>

  );
}

export default Home;
