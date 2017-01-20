import React from 'react';
import './AddStyle.css';
import ButtonStyle from './ButtonStyle';
import TaskTab from './TaskTab';
import TaskMap from './TaskMap';
import Select from './Select';
import TeamSelect from './TeamSelect';

export default class AddTask extends React.Component { //eslint-disable-line
  render() {
    const { pickupCord, deliveryCord, pCord, dCord } = this.props;
    return (
      <div className="boxShadow block-background" style={{ height: '67vh', position: 'relative' }}>
        <div className="ink-flex">
          <div className="all-100 team-block">
            <div className="ink-flex">
              <div className="all-30" style={{ padding: '0.5em 0.8em' }}>
                <div>Add Task</div>
              </div>
              <div className="all-70" style={{ padding: '0.3em 0.5em' }}>
                <div className="ink-flex push-right">
                  <ButtonStyle cancel>Cancel</ButtonStyle>
                  <ButtonStyle>Save</ButtonStyle>
                </div>
              </div>
            </div>
          </div>
          <div className="all-100" style={{ height: '40vh' }}>
            <div className="ink-flex">
              <div className="all-60">
                <TaskTab pickupCord={pickupCord} deliveryCord={deliveryCord} />
              </div>
              <div className="all-40">
                <TaskMap pCord={pCord} dCord={dCord} />
              </div>
            </div>
          </div>
          <div className="all-60">
            <div className="ink-flex" style={{ marginLeft: '1em' }}>
              <ul className="control unstyled ink-flex" style={{ margin: '0' }}>
                <li style={{ marginRight: '1em' }}><input type="radio" id="rb1" name="rb" value="Ace of Spades" /><label htmlFor="rb1" style={{ color: '#9099b7' }}>Auto</label></li>
                <li><input type="radio" id="rb2" name="rb" value="Queen of Diamonds" /><label htmlFor="rb2" style={{ color: '#9099b7' }}>Manual</label></li>
              </ul>
            </div>
            <div className="ink-flex vertical">
              <div style={{ margin:'0 0.3em' }}><TeamSelect /></div>
              <div style={{ margin: '0.2em 0.3em' }}><Select /></div>
            </div>
          </div>
          <div className="all-40">
            <textarea type="text" placeholder="Notes" style={{ height: '20.5vh', width: '100%', border: '1px solid #51d4ff', color: '#aaa', fontSize: '0.8rem' }} />
          </div>
        </div>
      </div>
    );
  }
}
