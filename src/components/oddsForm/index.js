import React, { Component } from 'react';
import './index.css';

class OddsForm extends Component {
  render() {
    return (
        <form onSubmit={this.props.getInput}>
          <input type="text" name="year" placeholder="Year..." />
          <input type="text" name="week" placeholder="Week..." />
          <input type="submit" value="Get Odds" />
        </form>
    );
  }
}

export default OddsForm;