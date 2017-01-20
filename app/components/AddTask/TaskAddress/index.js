import React from 'react';
import Flatpickr from 'react-flatpickr';
import '../../../../node_modules/flatpickr/dist/themes/dark.css';
import GMaps from '../GMaps';
import './taskAddress.css';

export default class TaskAddress extends React.Component { //eslint-disable-line
  render() {
    const { pickupCord } = this.props;
    return (
      <div className="ink-flex vertical task-address" style={{ padding: '0.8em 0.8em' }}>
        <div className="ink-flex vertical">
          <div className="sub-title">Name</div>
          <div><input type="text" placeholder="Enter Name"></input></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Phone</div>
          <div><input type="text" placeholder="Enter Phone Number"></input></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Email</div>
          <div><input type="text" placeholder="Enter Email"></input></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Date</div>
          <div><Flatpickr data-enable-time placeholder={'Pickup Before'} onChange={(v) => { console.info(v); }} /></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Address</div>
          <GMaps pickupCord={pickupCord} />
        </div>
      </div>
    );
  }
}
