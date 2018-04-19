import React from 'react';
import NavMenu from 'components/NavMenu';

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.headerMount('header');
  }

  render() {
    return (
      <div className="header" id="header">
        <div className="header__inner">
          {/* new NavMenu({props: {onPageChose: this.props.onPageChose}}) */}
          <NavMenu onPageChose={this.props.onPageChose} />
        </div>
      </div>
    );
  }
}
