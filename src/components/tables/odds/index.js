import React, { Component } from 'react';
import './index.css';
import API_KEY from '../../../config.js';
import OddsList from './oddsList';

class Odds extends Component {
  constructor() {
    super();
    this.state = {
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
      ],
      teams: {
        'ARI': 'Arizona',
        'ATL': 'Atlanta',
        'BAL': 'Baltimore',
        'BUF': 'Buffalo',
        'CAR': 'Carolina',
        'CHI': 'Chicago',
        'CIN': 'Cincinnati',
        'CLE': 'Cleveland',
        'DAL': 'Dallas',
        'DEN': 'Denver',
        'DET': 'Detroit',
        'GB': 'Green Bay',
        'HOU': 'Houston',
        'IND': 'Indianapolis',
        'JAC': 'Jacksonville',
        'KC': 'Kansas City',
        'LAC': 'Los Angelos (Chargers)',
        'LAR': 'Los Angelos (Rams)',
        'MIA': 'Miami',
        'MIN': 'Minnesotta',
        'NE': 'New England',
        'NO': 'New Orleans',
        'NYG': 'New York (Giants)',
        'NYJ': 'New York (Jets)',
        'OAK': 'Oakland',
        'PHI': 'Philadelphia',
        'PIT': 'Pittsburgh',
        'SEA': 'Seattle',
        'SF': 'San Francisco',
        'TB': 'Tampa Bay',
        'TEN': 'Tennessee',
        'WAS': 'Washington'
      }
    }
  }

  componentWillMount() {
    // add header for api_key to fetch call
    fetch(
      'https://api.fantasydata.net/v3/nfl/odds/JSON/GameOddsByWeek/2018/7',
      { headers: { 'Ocp-Apim-Subscription-Key': API_KEY } }).then(
        res => res.json()).then(
          data => {
            console.log(data);
            this.setState({ data: data});
          }
        );
  }

  nameChange = (abbr) => {
    // console.log(this.state.teams[abbr]);
    return this.state.teams[abbr];
  }

  render() {
    return (
      <div className="row">
        <div className="col-md">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Away Team</th>
                <th scope="col">Home Team</th>
                <th scope="col">Over/Under</th>
              </tr>
            </thead>
            <OddsList data={this.state.data} nameChange={this.nameChange} />
          </table>
        </div>
      </div>
    );
  }
}

export default Odds;
