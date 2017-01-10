import React from 'react';


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
            <div className="trip-card boxShadow" style={{ fontSize: '0.7rem', padding: '1em' }}>
              <div className="first-row ink-flex" style={{ paddingBottom: '0.3em' }}>
                <div className="all-50 ink-flex push-left">
                  <div className="trip-image">
                    <div className="trip-pic" style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', margin: 0 }}>
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/8f/b0/77/8fb077e97b62cfab2a4dec108ac7112f.jpg" alt="card" style={{ height: '30px', width: '100%' }}></img>
                    </div>
                  </div>
                  <div className="trip-info ink-flex vertical" style={{ marginLeft: '0.7em' }}>
                    <div className="sub-title">customer</div>
                    <div>Tyson</div>
                  </div>
                </div>
                <div className="all-50 ink-flex push-right">
                  <div className="trip-info">
                    <div>LIVE</div>
                  </div>
                </div>
              </div>
              <div className="second-row ink-flex">
                <div className="all-50 ink-flex push-left">
                  <div className="trip-info ink-flex vertical">
                    <div className="sub-title">Address</div>
                    <div>Malakpet</div>
                  </div>
                </div>
                <div className="all-50 ink-flex push-right">
                  <div className="trip-info ink-flex vertical" style={{ textAlign: 'right' }}>
                    <div className="sub-title">Driver</div>
                    <div>Tyson</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
