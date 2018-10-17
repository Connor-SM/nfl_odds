import React, { Component } from 'react';
import './index.css';
import OverUnderItem from '../overUnderItem';

class OverUnderList extends Component {
  render() {
    return (
      <td className="OverUnderList">
        {
          // need to splice because picking one sportsbook
          this.props.preGameOdds.splice(1, 1).map(
            (odds, key) => <OverUnderItem odds={odds} key={key} />
          )
        }
      </td>
    );
  }
}

export default OverUnderList;
