import React from 'react';

export default class Tasks extends React.Component { //eslint-disable-line
  componentDidMount() {
    let datepicker = new Ink.UI.DatePicker( '.ink-datepicker' ); //eslint-disable-line
  }
  render() {
    return (
      <div className="all-40 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow liner" style={{ background: '#fff', height: '30vh', padding: '0.8em 0.8em', position: 'relative' }}>
          <div className="line">
            <h6 className="push-left">Tasks</h6>
            <div className="push-right">
              <input type="text" className="ink-datepicker" data-format="d-m-Y" style={{ width: '92px' }} />
            </div>
          </div>
          <div className="column-group boxShadow">
            <div className="all-33 align-center" style={{ height: '10vh' }}>
              <p style={{ margin: '0', color: '#eaeaea' }}>Assigned</p>
              <p className="fw-900">23</p>
            </div>
            <div className="all-33 align-center" style={{ height: '10vh' }}>
              <p style={{ margin: '0', color: '#eaeaea' }}>UnAssigned</p>
              <p className="fw-900">23</p>
            </div>
            <div className="all-33 align-center" style={{ height: '10vh' }}>
              <p style={{ margin: '0', color: '#eaeaea' }}>Completed</p>
              <p className="fw-900">23</p>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '0.5em', width: '20.90em' }}>
            <div className="wrapper">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
