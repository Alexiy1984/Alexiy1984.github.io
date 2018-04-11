import React from 'react';
import Wrapper from 'components/Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class AppPage extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}
