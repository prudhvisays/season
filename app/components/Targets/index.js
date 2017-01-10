import React from 'react';
import DonutChart from '../Charts/Donut';

export default class Target extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className="all-20 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow block-background" style={{ border: '1px solid #04b2ff', height: '30vh' }}>
          <DonutChart />
        </div>
      </div>
    );
  }
}
