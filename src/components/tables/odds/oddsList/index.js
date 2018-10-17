import React, { Component } from 'react';
import './index.css';
import OddsItem from '../oddsItem';

class OddsList extends Component {
  render() {
    return (
        <tbody className="CheckoutList">
          {
            this.props.data.map(
              (game, key) => <OddsItem game={game} key={key} nameChange={this.props.nameChange} />
            )
          }
        </tbody>
    );
  }
}

export default OddsList;
