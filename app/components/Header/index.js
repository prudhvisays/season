import React from 'react';
import HeaderStyle from './HeaderStyle';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderStyle className="boxShadow block-background" />
    );
  }
}
