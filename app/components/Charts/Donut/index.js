import React from 'react';
import './Donut.css';

class DonutChart extends React.Component { //eslint-disable-line
  componentDidMount() {
    Morris.Donut({ //eslint-disable-line
      element: 'chart',
      data: [
          { label: 'Download Sales', value: 12 },
          { label: 'In-Store Sales', value: 30 },
          { label: 'Mail-Order Sales', value: 20 },
      ],
      size: true,
      colors: [
        '#ff6666', '#ff6656', '#ff6678',
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
