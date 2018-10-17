import React, { Component } from 'react';
import './index.css';

class OverUnder extends Component {
  getOdds = overunder => {
    console.log(overunder);
    if (overunder) {
      return overunder;
    } else {
      return 'N/A';
    }
  }

  render() {
    return (
      <span>
        {this.getOdds(this.props.odds.OverUnder)}
      </span>
    );
  }
}

export default OverUnder;
