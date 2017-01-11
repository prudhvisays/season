import React from 'react';
import PilotTripCard from '../PilotTripCard';
import TripCard from '../TripCard';

export default class UserInfo extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className="boxShadow user-scroll block-background" style={{ height: '67vh' }}>
        <div className="user-info" style={{ padding: '1em' }}>
          <div className="ProfilePic">
            <div className="ink-flex push-center">
              <div className="profile-pic" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: 0 }}>
                <img src="https://s-media-cache-ak0.pinimg.com/736x/8f/b0/77/8fb077e97b62cfab2a4dec108ac7112f.jpg" alt="card" style={{ height: '100px', width: '100%' }}></img>
              </div>
            </div>
          </div>
          <div className="Profile-title">
            <div className="ink-flex push-center">
              <div className="title">
                <h3 style={{ margin: 0 }}>Mark heisenberg</h3>
              </div>
            </div>
          </div>
          <div className="profile-status" style={{ fontSize: '0.8rem' }}>
            <div className="ink-flex push-center">
              <div className="online-status">
                <span className="ink-label green">Online</span>
              </div>
              <div className="divider"><span> | </span></div>
              <div className="battery-status">
                <span className="fab-100">52%</span>
              </div>
            </div>
          </div>
          <div className="profile-timeline boxShadow" style={{ fontSize: '1rem' }}>
            <div className="ink-flex push-center first-row">
              <div className="all-50 right-border">
                <div className="ink-flex vertical push-middle profile-tasks">
                  <div>24</div>
                  <div className="sub-title">Tasks</div>
                </div>
              </div>
              <div className="all-50">
                <div className="ink-flex vertical push-middle profile-ontime">
                  <div>58.3%</div>
                  <div className="sub-title">On Time</div>
                </div>
              </div>
            </div>
            <div className="ink-flex push-center second-row">
              <div className="all-33 right-border">
                <div className="ink-flex vertical push-middle profile-time">
                  <div>16 min</div>
                  <div className="sub-title">Time/Task</div>
                </div>
              </div>
              <div className="all-33 right-border">
                <div className="ink-flex vertical push-middle profile-distance">
                  <div>26 Km</div>
                  <div className="sub-title">Distance</div>
                </div>
              </div>
              <div className="all-33">
                <div className="ink-flex vertical push-middle profile-data">
                  <div>49.8</div>
                  <div className="sub-title">Data</div>
                </div>
              </div>
            </div>
          </div>
          <div className="trips">
            <TripCard />
            <PilotTripCard pilotStatus={'Ended on Dec 12, 7:30'} totalTask={1} completedTask={1} pilotDistance={23}/>
            <PilotTripCard pilotStatus={'Ended on Dec 14, 2:30'} totalTask={1} completedTask={1} pilotDistance={24}/>
            <PilotTripCard pilotStatus={'Ended on Dec 29, 8:30'} totalTask={1} completedTask={1} pilotDistance={30}/>
            <PilotTripCard pilotStatus={'Ended on Dec 30, 13:30'} totalTask={1} completedTask={1} pilotDistance={50}/>
          </div>
        </div>
      </div>
    );
  }
}
