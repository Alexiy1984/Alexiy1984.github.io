import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import AppPage from 'components/AppPage';

document.addEventListener('DOMContentLoaded', () => {
  //ReactDOM.render(<App />, document.querySelector('#app'));
  ReactDOM.render(<AppPage />, document.querySelector('#apppage'));
});
