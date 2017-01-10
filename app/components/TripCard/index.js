import React from 'react';

export default class TripCard extends React.Component { //eslint-disable-line
  render() {
    const { detailedInfo } = this.props;
    return (
      <a onClick={detailedInfo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="trip-card third-boxShadow block-background" style={{ fontSize: '0.7rem', padding: '1em' }}>
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
      </a>
    );
  }
}
