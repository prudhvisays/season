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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section style={{ background: '#fafafa' }}>
        <Header />
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.2em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-75">
              <div className="column-group quarter-horizontal-gutters margin">
                <Targets />
                <Tasks />
                <Pilots />
                <div className="all-60 marginTop" style={{ height: '67vh' }}>
                  <div className="boxShadow" style={{ background: '#fff', height: '67vh' }}></div>
                </div>
                <div className="all-40 marginTop" style={{ height: '67vh' }}>
                  <div className="boxShadow" style={{ background: '#fff', height: '67vh' }}></div>
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
