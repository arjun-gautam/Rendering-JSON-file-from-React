import React, { Component } from 'react';
import './App.css';
import LoadComponent from './container/LoadComponent.js';

class App extends Component {
  render() {
    const pageDefinition = {
      container: {
        nav: 1,
        article: {
          title: 2,
          description: 3,
        },
        title: 2,
      },
    }

    return (
        <LoadComponent name='pageDefinition' json={{pageDefinition}}/>
    );
  }
}

export default App;
