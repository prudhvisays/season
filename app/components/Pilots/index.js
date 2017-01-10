import React from 'react';
import Feed from '../Feed';
import TripCard from '../TripCard';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default class Pilots extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.state = {
      expand: false,
    };
    this.taskExpand = this.taskExpand.bind(this);
    this.detailedInfo = this.detailedInfo.bind(this);
  }
  componentDidMount() {
    let Datepicker = new Ink.UI.DatePicker( '.ink-datepicker' ); //eslint-disable-line
  }
  taskExpand() {
    const taskDiv = document.querySelector('.TaskExpand');
    const listShow = document.querySelector('.ListShow');
    if (!this.state.expand) {
      taskDiv.style.height = '98vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      this.setState({ expand: true });
    } else {
      taskDiv.style.height = '30vh';
      listShow.style.opacity = '0';
      listShow.style.display = 'none';
      this.setState({ expand: false });
    }
  }
  detailedInfo() {
    this.props.divPilot();
  }
  render() {
    return (
      <div className="all-40 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow PilotLiner TaskExpand block-background" style={{ height: '30vh', position: 'relative', transition: 'height 0.5s linear 0s' }}>
          <div className="pilot-block ink-flex" style={{ padding: '0.5em 0.8em' }}>
            <div className="all-50" style={{ margin: 0, color: 'rgb(81, 212, 255)' }}>Pilots</div>
            <div className="all-50" style={{ textAlign: 'right' }}>
              <input type="text" className="ink-datepicker" data-format="d-m-Y" style={{ width: '92px', color: '#fff' }} />
            </div>
          </div>
          <div style={{ padding: '0.8em 0.8em' }}>
            <div className="ink-flex">
              <div className="all-100">
                <Sparklines data={[20, 5, 30, 9, 20, 5, 30, 9, 20, 5, 30, 9, 20, 5, 30, 9, 20, 30, 5, 10]} limit={20} width={100} height={10} margin={0}>
                  <SparklinesLine style={{ stroke: '#51d4ff', strokeWidth: '0.5', fill: 'none' }} />
                </Sparklines>
              </div>
              <div className="all-100">
                <Feed tasksExpand={this.taskExpand} />
              </div>
            </div>
            <div className="search" style={{ marginTop: '6px', width: '20.90em' }}>
              <div className="wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
              </div>
            </div>
            <div className="ListShow" style={{ marginTop: '4.5em', display: 'none', opacity: '0', transition: 'all 0.5s linear 0s' }}>
              <TripCard detailedInfo={this.detailedInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
