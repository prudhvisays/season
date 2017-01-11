import React from 'react';
import TopList from './TopList';

export default class TopGroup extends React.Component { //eslint-disable-line
  render() {
    return (
      <ul className="player">
        <TopList groupName={'Madhapur'} groupSales={'230'} badgeColor={'rgb(245, 37, 151)'} />
        <TopList groupName={'Ameerpet'} groupSales={'210'} badgeColor={'rgb(1, 189, 240)'} />
        <TopList groupName={'Kondapur'} groupSales={'180'} badgeColor={'#FCB150'} />
        <TopList groupName={'Gachibowli'} groupSales={'170'} badgeColor={'#f44336'} />
        <TopList groupName={'Dhilhsuk Nagar'} groupSales={'150'} badgeColor={'#FF9800'} />
        <TopList groupName={'Koti'} groupSales={'110'} badgeColor={'#FF5722'} />
        <TopList groupName={'Abids'} groupSales={'70'} badgeColor={'#009688'} />
        <TopList groupName={'Banjara Hills'} groupSales={'70'} badgeColor={'#00BCD4'} />
        <TopList groupName={'Jubilee Hills'} groupSales={'60'} badgeColor={'#7E57C2'} />
      </ul>
    );
  }
}
