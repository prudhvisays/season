import React from 'react';
import Score from '../Score';

export default class Feed extends React.Component { //eslint-disable-line
  render() {
    const { tasksExpand } = this.props;
    return (
      <div className="ink-flex task-feed-boxShadow" style={{ fontSize: '1rem' }}>
        <div className="all-33" onClick={tasksExpand} >
          <Score score={8} subTitle={'Assigned'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={5} subTitle={'Unassigned'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={57} subTitle={'Completed'} />
        </div>
      </div>
    );
  }
}
