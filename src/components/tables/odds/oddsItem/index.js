import React, { Component } from 'react';
import './index.css';
import OverUnderList from '../overUnderList';

class OddsItem extends Component {
  render() {
    return (
      <tr className="OddsItem">
        <th scope="row">{this.props.index}</th>
        <td>{this.props.nameChange(this.props.game.AwayTeamName)}</td>
        <td>{this.props.nameChange(this.props.game.HomeTeamName)}</td>
        <OverUnderList preGameOdds={this.props.game.PregameOdds} />
      </tr>
    );
  }
}

export default OddsItem;
