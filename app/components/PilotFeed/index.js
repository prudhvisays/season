import React from 'react';
import Score from '../Score';

export default class PilotFeed extends React.Component { //eslint-disable-line
  render() {
    const { tasksExpand } = this.props;
    return (
      <div className="ink-flex pilot-feed-boxShadow" style={{ fontSize: '1rem', position: 'relative' }}>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={21} subTitle={'Active'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={26} subTitle={'Offline'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={47} subTitle={'Total'} />
        </div>
      </div>
    );
  }
}
