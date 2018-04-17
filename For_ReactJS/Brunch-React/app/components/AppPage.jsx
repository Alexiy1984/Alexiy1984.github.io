import React from 'react';
import Wrapper from 'components/Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';

const pagesurl = [
  {id: 1, url: 'Index.html'},
  {id: 2, url: 'About.html'},
  {id: 3, url: 'Works.html'},
  {id: 4, url: 'Contact.html'}
];

export default class AppPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {page: 'Index.html'};
    this.NavMenuOnClick = this.NavMenuOnClick.bind(this,props);
  }

  NavMenuOnClick(props) {
    if (props == 1) {
      this.setState(state => ({page: 'Index.html' }));  
    } else if (props == 2) {
      this.setState(state => ({page: 'About.html' }));  
    } else if (props == 3) {
      this.setState(state => ({page: 'Works.html' })); 
    } else this.setState(state => ({page: 'Contact.html' })); 
  }

  render() {
    const page = this.state.page;
    return (
      <div className="page">
        <Header />
        {pagesurl.map(props => 
          <button onClick={this.NavMenuOnClick(props.id)} key={props.id}>{props.url}</button>
        )};
        <div>
          {this.state.page == 'Index.html' ? ' Выбрана главная страница': null}
        </div>
        <Wrapper />
        <Footer />
      </div>
    );
  }
}
