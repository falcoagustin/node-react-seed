import React from 'react';
import Header from './Header.jsx';
import LoginPanel from './LoginPanel.jsx';

require('../styles/styles.scss');

export default class App extends React.Component {
  render() {
    let authorized = true;
    if (authorized) {
      return (
          <LoginPanel> </LoginPanel>
      );
    } else {
      return (
          <Header/>
      );
    }
  }
}
