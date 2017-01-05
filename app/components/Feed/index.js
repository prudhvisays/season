import React from 'react';

export default class Feed extends React.Component { //eslint-disable-line
  render() {
    return (
      <nav className="ink-navigation boxShadow" onClick={this.props.onClick}>
        <ul className="menu horizontal white" style={{ marginLeft: '1.6em' }}>
          <li className="align-center"><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Assigned</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p></a></li>
          <li className="align-center"><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Unassigned</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p>
          </a></li>
          <li className="align-center"><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Completed</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p>
          </a></li>
        </ul>
      </nav>
    );
  }
}
