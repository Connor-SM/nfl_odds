import React, { Component } from 'react';
import './index.css';
import Odds from '../../components/tables/odds';
import OddsForm from '../../components/oddsForm';
import API_KEY from '../../config.js';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      year: 2018,
      week: 1,
      data: [
        {
          HomeTeamName: '',
          AwayTeamName: '',
          Week: 0,
          PregameOdds: [
            {
              OverUnder: 0
            }
          ]
        }
      ]
    }
  }

  getInput = async(e) => {
    e.preventDefault();

    const year = e.target.elements.year.value;
    const week = e.target.elements.week.value;

    this.setState({
      year: year,
      week: week
    });

    this.getData(year, week);
  }

  getData = (year, week) => {
    // add header for api_key to fetch call
    fetch(
      `https://api.fantasydata.net/v3/nfl/odds/JSON/GameOddsByWeek/${year}/${week}`,
      { headers: { 'Ocp-Apim-Subscription-Key': API_KEY } }).then(
        res => res.json()).then(
          data => {
            console.log(data);
            this.setState({ data: data});
          }
        );
  }

  componentWillMount() {
    this.getData(2018, 1);
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <OddsForm getInput={this.getInput} />
          <h1>Year: {this.state.year}</h1>
          <h3>Week: {this.state.week}</h3>
          <Odds data={this.state.data} year={this.state.year} week={this.state.week} />
        </div>
      </div>
    );
  }
}

export default Home;
