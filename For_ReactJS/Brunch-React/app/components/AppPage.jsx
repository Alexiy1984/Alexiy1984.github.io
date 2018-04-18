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
    this.NavMenuOnClick = this.NavMenuOnClick.bind(this);
  }

  NavMenuOnClick(page_id) {
    if (page_id == 1) {
      this.setState({page: 'Index.html'});
    } else if (page_id == 2) {
      this.setState({page: 'About.html'});
    } else if (page_id == 3) {
      this.setState({page: 'Works.html'});
    } else this.setState({page: 'Contact.html' });
  }

  render() {
    const page = this.state.page;
    return (
      <div className="page">
        <Header />
        {pagesurl.map(page =>
          <button onClick={(e) => { this.NavMenuOnClick(page.id) }} key={page.id}>{page.url}</button>
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
