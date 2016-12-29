import React from 'react';


export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="ink-navigation">
        <ul className="menu horizontal black">
          <li className="heading"><a>Home</a></li>
          <li><a>Post archive</a></li>
        </ul>
      </nav>
    );
  }
}
