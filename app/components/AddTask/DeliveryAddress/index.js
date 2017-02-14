import React from 'react';
import Input from '../Input';
import Flatpickr from 'react-flatpickr';
import '../../../../node_modules/flatpickr/dist/themes/dark.css';
import DMaps from '../DMaps';
import '../TaskAddress/taskAddress.css';

export default class TaskAddress extends React.Component { //eslint-disable-line
  render() {
    const { deliveryCord } = this.props;
    return (
      <div className="ink-flex vertical task-address" style={{ padding: '0.8em 0.8em' }}>
        <Input Name={'Name'} Holder={'Enter Name'} />
        <Input Name={'Phone'} Holder={'Enter Phone Number'} />
        <Input Name={'Email'} Holder={'Enter Email'} />
        <div className="ink-flex vertical">
          <div className="sub-title">Date</div>
          <div><Flatpickr data-enable-time placeholder={'Deliver Before'} onChange={(v) => { console.info(v); }} /></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Address</div>
          <DMaps deliveryCord={deliveryCord} />
        </div>
      </div>
    );
  }
}
