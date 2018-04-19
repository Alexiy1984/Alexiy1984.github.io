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
    this.state = {height: 0};
    this.NavMenuOnClick = this.NavMenuOnClick.bind(this);
    this.changePage = this.changePage.bind(this);
    this.headerDidMount = this.headerDidMount.bind(this);
  }

  NavMenuOnClick(page_id, page_url) {
    if (page_id == 1) {
      this.setState({page: page_url});
    } else if (page_id == 2) {
      this.setState({page: page_url});
    } else if (page_id == 3) {
      this.setState({page: page_url});
    } else  {
      this.setState({page: page_url });
    }
  }

  changePage(page_name) {
    console.log('we have to change page');
    console.log(page_name);
    this.setState({page: page_name});
  }

  headerDidMount(component_id) {
    let height = document.getElementById(component_id).clientHeight;
    console.log(height);
    this.setState({ height });
  }

  render() {
    const pageurlforwrapper = this.state.page;
    const headerheight = this.state.height;
    return (
      <div className="page">
        <Header onPageChose={this.changePage} headerMount={this.headerDidMount}/>
        {/* new Header({props: {onPageChose: this.changePage}}) */}
        {/* {pagesurl.map(page =>
          <button onClick={(e) => {this.NavMenuOnClick(page.id, page.url)}} key={page.id}>{page.url}</button>
        )} */}
        {/* <div>
          {this.state.page == 'Index.html' ? ' Выбрана главная страница': 'Выбрана страница'+ this.state.page}
        </div> */}
        <Wrapper content={pageurlforwrapper} topmargin={headerheight}/>
        <Footer />
      </div>
    );
  }
}
