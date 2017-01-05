import React from 'react';

export default class PilotFeed extends React.Component { //eslint-disable-line
  render() {
    return (
      <nav className="ink-navigation boxShadow" onClick={this.props.onClick}>
        <ul className="menu horizontal white" style={{ marginLeft: '2.8em' }}>
          <li className="align-center" style={{ marginRight: '1em' }}><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Active</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p></a></li>
          <li className="align-center" style={{ marginRight: '1em' }}><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Offline</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p>
          </a></li>
          <li className="align-center"><a>
            <p className="fw-200 medium" style={{ margin: '0', color: '#eaeaea' }}>Total</p>
            <p className="fw-900" style={{ marginBottom: '0' }}>23</p>
          </a></li>
        </ul>
      </nav>
    );
  }
}
