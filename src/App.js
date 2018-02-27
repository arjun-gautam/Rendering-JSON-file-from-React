import React, { Component } from 'react';
import './App.css';
import LoadComponent from './container/LoadComponent';

class App extends Component {
  render() {
    const pageDefinition = {
      container: {
        layout: 1,
      },
    }

    return (
        <LoadComponent name='pageDefinition' json={{pageDefinition}}/>
    );
  }
}

export default App;
