import React, { Component } from 'react';
import './index.css';
import OddsList from './oddsList';

class Odds extends Component {
  constructor() {
    super();
    this.state = {
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
        'JAX': 'Jacksonville',
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
                <th scope="col">
                  <img className="logo" src={require('../../../static/images/nfl.png')} alt="NFL Logo" />
                </th>
                <th scope="col">Away Team</th>
                <th scope="col">
                  <img className="logo" src={require('../../../static/images/nfl.png')} alt="NFL Logo" />
                </th>
                <th scope="col">Home Team</th>
                <th scope="col">Over/Under</th>
              </tr>
            </thead>
            <OddsList data={this.props.data} nameChange={this.nameChange} />
          </table>
        </div>
      </div>
    );
  }
}

export default Odds;
