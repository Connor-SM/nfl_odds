import React, { Component } from 'react';
import './index.css';
import Odds from '../../components/tables/odds';
import OddsForm from '../../components/oddsForm';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      year: 2018,
      week: 1
    }
  }

  getInput = async(e) => {
    e.preventDefault();

    const year = e.target.elements.year.value;
    const week = e.target.elements.week.value;

    this.setState({
      year: year,
      week: week
    })
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <OddsForm getInput={this.getInput} />
          <h1>Year: {this.state.year}</h1>
          <h3>Week: {this.state.week}</h3>
          <Odds year={this.state.year} week={this.state.week} />
        </div>
      </div>
    );
  }
}

export default Home;
