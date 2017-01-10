import React from 'react';
import Score from '../Score';

export default class PilotFeed extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className="ink-flex boxShadow" style={{ fontSize: '1rem' }}>
        <div className="all-33">
          <Score score={23} subTitle={'Active'} />
        </div>
        <div className="all-33">
          <Score score={34} subTitle={'Offline'} />
        </div>
        <div className="all-33">
          <Score score={57} subTitle={'Total'} />
        </div>
      </div>
    );
  }
}
