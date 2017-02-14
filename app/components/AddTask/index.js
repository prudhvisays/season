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
          <div className="all-40">
            <div className="ink-flex vertical">
              <div className="title-desc ink-flex vertical">
                <input type="text" placeholder="Title" style={{ height: '5.9vh' }}></input>
                <textarea type="text" placeholder="Description" style={{ height: '14.5vh', width: '100%', color: '#fff', fontSize: '0.8rem' }} />
              </div>
              <TaskMap pCord={pCord} dCord={dCord} />
            </div>
          </div>
          <div className="all-60" style={{ height: '40vh' }}>
            <div className="ink-flex">
              <div className="all-100">
                <TaskTab pickupCord={pickupCord} deliveryCord={deliveryCord} />
              </div>
              <div className="all-100">
                <div className="ink-flex" style={{ marginLeft: '1em' }}>
                  <ul className="control unstyled ink-flex" style={{ margin: '0' }}>
                    <li style={{ marginRight: '1em' }}><input type="radio" id="rb1" name="rb" value="Ace of Spades" /><label htmlFor="rb1" style={{ color: '#9099b7' }}>Auto</label></li>
                    <li><input type="radio" id="rb2" name="rb" value="Queen of Diamonds" /><label htmlFor="rb2" style={{ color: '#9099b7' }}>Manual</label></li>
                  </ul>
                </div>
                <div className="ink-flex vertical">
                  <div style={{ margin: '0 0.3em' }}><TeamSelect /></div>
                  <div style={{ margin: '0.2em 0.3em' }}><Select /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
