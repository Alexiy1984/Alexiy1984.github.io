import React from 'react';
import NavMenu from 'components/NavMenu';

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <div className="header__inner">
          {/* new NavMenu({props: {onPageChose: this.props.onPageChose}}) */}
          <NavMenu onPageChose={this.props.onPageChose} />
        </div>
      </div>
    );
  }
}
