import React, { Component } from 'react';
import './index.css';

class OverUnder extends Component {
  render() {
    return (
      <span>
        {this.props.odds.OverUnder}
      </span>
    );
  }
}

export default OverUnder;
