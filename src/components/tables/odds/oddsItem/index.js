import React, { Component } from 'react';
import './index.css';
import OverUnderList from '../overUnderList';

class OddsItem extends Component {
  getImageURL = abbr => {
    return abbr.toLowerCase();
  }

  render() {
    return (
      <tr className="OddsItem">
        <th scope="row">
          {
            this.props.game.AwayTeamName && <img className="logo" src={require('../../../../static/images/' + this.getImageURL(this.props.game.AwayTeamName) + '.png')} alt="NFL Logo" />
          }
        </th>
        <td>{this.props.nameChange(this.props.game.AwayTeamName)}</td>
        <th scope="row">
          {
            this.props.game.HomeTeamName && <img className="logo" src={require('../../../../static/images/' + this.getImageURL(this.props.game.HomeTeamName) + '.png')} alt="NFL Logo" />
          }
        </th>
        <td>{this.props.nameChange(this.props.game.HomeTeamName)}</td>
        <OverUnderList preGameOdds={this.props.game.PregameOdds} />
      </tr>
    );
  }
}

export default OddsItem;
