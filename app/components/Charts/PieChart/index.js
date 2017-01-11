import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                {name: 'Group E', value: 300},{name: 'Group F', value: 500}];
const COLORS = ['rgb(245, 37, 151)', 'rgb(81, 212, 255)', '#cc324b', '#11a8ab', '#FCB150', 'rgb(1, 189, 240)'];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 5;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" style={{ fontSize: '0.8em' }}>{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" style={{ fontSize: '0.7em' }}>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class PieChartShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onPieEnter = this.onPieEnter.bind(this);
  }
  onPieEnter(e) {
    const index = data.findIndex( x => x.name == e.name);
    this.setState({
      activeIndex: index,
    });
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <PieChart width={667} height={400} onMouseEnter={(e) => { this.onPieEnter(e); }}>
        <Pie
        	activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={190}
          cy={110}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8">
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
       </PieChart>
    )
  }
}
