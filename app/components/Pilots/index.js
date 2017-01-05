import React from 'react';
import PilotFeed from '../PilotFeed';

export default class Pilots extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.state = {
      expand: false,
    };
    this.taskExpand = this.taskExpand.bind(this);
  }
  componentDidMount() {
    let Datepicker = new Ink.UI.DatePicker( '.ink-datepicker' ); //eslint-disable-line
  }
  taskExpand() {
    const taskDiv = document.querySelector('#TaskExpand');
    const listShow = document.querySelector('#ListShow');
    if (!this.state.expand) {
      taskDiv.style.height = '98vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      this.setState({ expand: true });
    } else {
      taskDiv.style.height = '30vh';
      listShow.style.opacity = '0';
      this.setState({ expand: false });
    }
  }
  render() {
    return (
      <div className="all-40 marginTop" style={{ height: '30vh' }}>
        <div id="TaskExpand" className="boxShadow PilotLiner" style={{ background: '#fff', height: '30vh', padding: '0.8em 0.8em', position: 'relative', transition: 'height 0.5s linear 0s' }}>
          <div className="line">
            <h6 className="push-left">Pilots</h6>
            <div className="push-right">
              <input type="text" className="ink-datepicker" data-format="d-m-Y" style={{ width: '92px' }} />
            </div>
          </div>
          <div>
            <PilotFeed ref={(c) => { this.taskDetails = c; }} onClick={this.taskExpand} />
          </div>
          <div className="search" style={{ marginTop: '37px', width: '20.90em' }}>
            <div className="wrapper">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
            </div>
          </div>
          <div id="ListShow" style={{ marginTop: '4.5em', display: 'none', opacity: '0', transition: 'all 0.5s linear 0s' }}>
            <div className="ink-flex boxShadow marginBottom" style={{ padding: '0.5em' }}>
              <div className="column-group all-auto">
                <div className="all-100" style={{ border: 0, borderBottom: '1px solid #eaeaea', paddingBottom: '0.6em' }}>
                  <div className="all-60">
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/8f/b0/77/8fb077e97b62cfab2a4dec108ac7112f.jpg" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '0.3em' }}></img>
                    <div style={{ position: 'relative', left: '26.23px', top: '-7px' }}>
                      <p style={{ margin: 0, fontSize: '10px', position: 'absolute', top: '-20px' }}>Pilot</p>
                      <p style={{ display: 'inline-block', margin: '0', fontSize: '20px', position: 'absolute', top: '-16px' }}>mark</p>
                    </div>
                  </div>
                  <div className="all-40" style={{ textAlign: 'right' }}>Live</div>
                </div>
                <div className="all-60" style={{ position: 'relative' }}>
                  <p style={{ margin: 0, fontSize: '9px' }}>Tasks Completed</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>0 of 1</p>
                </div>
                <div className="all-40" style={{ textAlign: 'right', position: 'relative' }}>
                  <p style={{ margin: 0, fontSize: '9px' }}>Travelled so far</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>5km</p></div>
              </div>
            </div>
            <div className="ink-flex boxShadow marginBottom" style={{ padding: '0.5em' }}>
              <div className="column-group all-auto">
                <div className="all-100" style={{ border: 0, borderBottom: '1px solid #eaeaea', paddingBottom: '0.6em' }}>
                  <div className="all-60">
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/8f/b0/77/8fb077e97b62cfab2a4dec108ac7112f.jpg" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '0.3em' }}></img>
                    <div style={{ position: 'relative', left: '26.23px', top: '-7px' }}>
                      <p style={{ margin: 0, fontSize: '10px', position: 'absolute', top: '-20px' }}>Pilot</p>
                      <p style={{ display: 'inline-block', margin: '0', fontSize: '20px', position: 'absolute', top: '-16px' }}>mark</p>
                    </div>
                  </div>
                  <div className="all-40" style={{ textAlign: 'right' }}>Live</div>
                </div>
                <div className="all-60" style={{ position: 'relative' }}>
                  <p style={{ margin: 0, fontSize: '9px' }}>Tasks Completed</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>0 of 1</p>
                </div>
                <div className="all-40" style={{ textAlign: 'right', position: 'relative' }}>
                  <p style={{ margin: 0, fontSize: '9px' }}>Travelled so far</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>5km</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
