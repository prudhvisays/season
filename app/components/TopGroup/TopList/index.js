import React from 'react';
import GroupStyle from '../GroupStyle';

export default class TopList extends React.Component { //eslint-disable-line
  render() {
    const { badgeColor, groupName, groupSales } = this.props;
    return (
      <li className="player-list ink-flex">
        <GroupStyle className="ink-flex player-line" badgeColor={badgeColor}>
          <div className="all-50 group-name" style={{ paddingLeft: '0.8em' }}>{groupName}</div>
          <div className="all-50" style={{ textAlign: 'right' }}><em className="sub-title">Sales </em>{groupSales}</div>
        </GroupStyle>
      </li>
    );
  }
}
