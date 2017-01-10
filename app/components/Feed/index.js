import React from 'react';
import Score from '../Score';

export default class Feed extends React.Component { //eslint-disable-line
  render() {
    const { tasksExpand } = this.props;
    return (
      <div className="ink-flex" style={{ fontSize: '1rem' }}>
        <div className="all-33" onClick={tasksExpand} >
          <Score score={23} subTitle={'Assigned'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={34} subTitle={'Unassigned'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={57} subTitle={'Completed'} />
        </div>
      </div>
    );
  }
}
