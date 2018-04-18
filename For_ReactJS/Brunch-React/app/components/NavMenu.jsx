import React from 'react';
import Timer from 'components/Timer';
//import AnimText from 'components/AnimatedText';

const pages = [
  {id:1, name: ['Г','л','а','в','н','а','я']                  ,link: 'Index.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:2, name: ['О',' ','н','а','с']                          ,link: 'About.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:3, name: ['Н','а','ш','и',' ','р','а','б','о','т','ы']  ,link: 'Works.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:4, name: ['К','о','н','т','а','к','т','ы']              ,link: 'Contacts.html' , iclass: 'nav-menu__item', aclass: 'nav-menu__link'}
];

const mainclass = 'nav-menu';
const animtxtclass = '__animated-text';

export default class NavMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {current_id: 'non-chosen'}
    this.onMouseEnter = (function (page) {
      this.setState({current_id: page.id})
    }).bind(this)
  }
  // onMouseEnter(page) {
  //   this.setState({current_id: page.id})
  // }
  render() {
    return (
      <div className="navigation-menu" id="nav">
        <ul className="nav-menu">
          <Timer />
          {pages.map(p =>
            <li key={p.id} className={p.iclass}>
              <a href={p.link} className={p.aclass} onMouseEnter={(e) => {this.onMouseEnter(p)}} >
                {p.name.map((m,index)  =>
                  <p key={index} className={mainclass+animtxtclass}>{m}</p>
                )}
              </a>
            </li>
          )}
          <li>{this.state.current_id}</li>
        </ul>
      </div>
    );
  }
}
