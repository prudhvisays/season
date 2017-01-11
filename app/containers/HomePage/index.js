/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Map from '../../components/Map';
import './HomeStyle.css';
import Header from '../../components/Header';
import Targets from '../../components/Targets';
import Tasks from '../../components/Tasks';
import Pilots from '../../components/Pilots';
import Ranking from '../../components/Ranking';
import classnames from 'classnames';
import UserInfo from '../../components/UserInfo';
import Tabs from '../../components/Tabs';
import TopGroup from '../../components/TopGroup';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      compressed: false,
      pilotState: false,
      orderDetails: false,
      groupDisplay: false,
    };
    this.divTask = this.divTask.bind(this);
    this.divPilot = this.divPilot.bind(this);
    this.orderDetails = this.orderDetails.bind(this);
    this.groupDisplay = this.groupDisplay.bind(this);
  }
  divTask() {
    this.setState({ compressed: !this.state.compressed });
  }
  divPilot() {
    this.setState({ compressed: !this.state.compressed });
    this.setState({ pilotState: !this.state.pilotState });
  }
  groupDisplay() {
    this.setState({ groupDisplay: !this.state.groupDisplay });
  }
  orderDetails() {
    this.setState({ orderDetails: !this.state.orderDetails });
  }
  render() {
    const { compressed, pilotState, orderDetails, groupDisplay } = this.state;
    return (
      <section style={{ background: '#1f253d', color: '#fff' }}>
        <Header />
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-75">
              <div className="column-group quarter-horizontal-gutters margin">
                <Targets />
                <Tasks divTask={this.divTask} orderDetails={this.orderDetails} />
                <Pilots divPilot={this.divPilot} groupDisplay={this.groupDisplay} />
                <div ref={(c) => { this.compress = c; }} className={classnames('marginTop', { 'all-60': !compressed, 'all-20': compressed })} style={{ height: '67vh' }}>
                  <Ranking compressed={compressed}/>
                </div>
                {compressed && <div className="all-40 marginTop">{ pilotState && <UserInfo />}</div>}
                <div className="all-40 marginTop" style={{ height: '67vh' }}>
                  {!orderDetails ? <div className="boxShadow block-background" style={{ height: '67vh' }}>
                    { !groupDisplay ? <div className="ink-flex">
                      <div className="all-100">
                        <ul className="ink-flex time-length push-center">
                          <li className=""><a className="time-length-btn">Week</a></li>
                          <li className=""><a className="time-length-btn">Month</a></li>
                          <li className=""><a className="time-length-btn">Year</a></li>
                        </ul>
                      </div>
                      <div className="all-100">
                        <div className="top-group-list" style={{ padding: '0.8em' }}>
                          <TopGroup />
                        </div>
                      </div>
                    </div> : null}
                  </div> : <Tabs /> }
                </div>
              </div>
            </div>
            <div className="all-25" style={{ height: '100vh' }}>
              <Map></Map>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
