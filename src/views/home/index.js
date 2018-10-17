import React, { Component } from 'react';
import './index.css';
import Odds from '../../components/tables/odds';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <Odds />
        </div>
      </div>
    );
  }
}

export default Home;
