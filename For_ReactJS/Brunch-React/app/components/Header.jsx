import React from 'react';
import NavMenu from 'components/NavMenu';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__inner">
          <NavMenu />
        </div>
      </div>
    );
  }
}
