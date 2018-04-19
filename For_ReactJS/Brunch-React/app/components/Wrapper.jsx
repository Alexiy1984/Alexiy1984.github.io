import React from 'react';
import MainContent from 'components/content/MainContent';
import AboutUs from 'components/content/AboutUs';
import OurWorks from 'components/content/OurWorks';
import Contacts from 'components/content/Contacts';

const slyleNames = [
  'wrapper__inner',
  'wrapper__inner wrapper__inner_transparent',
  'wrapper__inner wrapper__inner_no-padding'
];

function Greeting(props) {
  if (props.name) {
    return <span>Добро пожаловать, {props.name}.</span>;
  }
  return <span>Добро пожаловать, незнакомец.</span>;
}

function ContentChoice(element) {
  if (element == 'Index.html') {
    return (<MainContent wrpinncls={slyleNames[2]} />) 
  } else if (element == 'About.html') {
    return (<AboutUs wrpinncls={slyleNames[1]}/>)
  } else if (element == 'Works.html') {
    return (<OurWorks wrpinncls={slyleNames[0]}/>)
  } else return (<Contacts wrpinncls={slyleNames[0]}/>)
}

export default class Wrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {page: 'Index.html'};
  }

  render() {
    return (
      <div className="wrapper" style={this.props.content == 'Index.html' ? {marginTop: '0px'} : {marginTop: this.props.topmargin + 'px'}} >
        <div className="wrapper__content">
          {/* <Greeting name={users[6]} /> */}
          {ContentChoice(this.props.content)}
        </div>
      </div>
    );
  }
}
