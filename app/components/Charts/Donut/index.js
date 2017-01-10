import React from 'react';
import './Donut.css';

class DonutChart extends React.Component { //eslint-disable-line
  componentDidMount() {
    Morris.Donut({ //eslint-disable-line
      element: 'chart',
      data: [
          { label: 'Download Sales', value: 12 },
          { label: 'In-Store Sales', value: 30 },
      ],
      size: true,
      colors: [
        '#1d233b', '#394264',
      ],
    });
  }
  render() {
    return (
      <div id="chart"></div>
    );
  }
}

export default DonutChart;
