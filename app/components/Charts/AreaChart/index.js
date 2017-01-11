import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
      {name: '0600', actual: 1000, target: 2400, amt: 2400},
      {name: '1000', actual: 3000, target: 1398, amt: 2210},
      {name: '1400', actual: 2000, target: 9800, amt: 2290},
      {name: '1800', actual: 2780, target: 3908, amt: 2000},
      {name: '2200', actual: 1890, target: 4800, amt: 2181},
      {name: '0200', actual: 2390, target: 3800, amt: 2500},
      {name: '0600', actual: 1000, target: 2400, amt: 2400},
      {name: '1000', actual: 3000, target: 1398, amt: 2210},
      {name: '1400', actual: 2000, target: 9800, amt: 2290},
      {name: '1800', actual: 2780, target: 3908, amt: 2000},
      {name: '2200', actual: 1890, target: 4800, amt: 2181},
      {name: '0200', actual: 2390, target: 3800, amt: 2500},
      {name: '0600', actual: 1000, target: 2400, amt: 2400},
      {name: '1000', actual: 3000, target: 1398, amt: 2210},
      {name: '1400', actual: 2000, target: 9800, amt: 2290},
      {name: '1800', actual: 2780, target: 3908, amt: 2000},
      {name: '2200', actual: 1890, target: 4800, amt: 2181},
      {name: '0200', actual: 2390, target: 3800, amt: 2500},
      {name: '0600', actual: 1000, target: 2400, amt: 2400},
      {name: '1000', actual: 3000, target: 1398, amt: 2210},
      {name: '1400', actual: 2000, target: 9800, amt: 2290},
      {name: '1800', actual: 2780, target: 3908, amt: 2000},
      {name: '2200', actual: 1890, target: 4800, amt: 2181},
      {name: '0200', actual: 2390, target: 3800, amt: 2500}
];

export default class StackedAreaChart extends React.Component{
	render() {
  	return (
      <ComposedChart width={400} height={200} data={data}
            margin={{top: 0, right: 0, bottom: 0, left: 0}}>
          <XAxis dataKey="name" label="Pages"/>
          <YAxis label="Index"/>
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke='#f5f5f5'/>

          <Bar dataKey='actual' barSize={20} fill='rgb(81, 212, 255)'/>
          <Line type='monotone' dataKey='target' stroke='#ff7300'/>
       </ComposedChart>
    );
  }
}
