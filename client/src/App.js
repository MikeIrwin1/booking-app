import React, { Component } from 'react';
import './App.css';
import PageContainer from './containers/PageContainer';

class App extends Component {
  render() {
    return (
      <div className = "window">
        <h1 id ='appheader'>A wonderful booking app.</h1>
        <PageContainer/>
      </div>
    );
  }
}

export default App;
