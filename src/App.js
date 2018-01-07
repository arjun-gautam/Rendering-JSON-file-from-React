import React, { Component } from 'react';
import './App.css';
import LoadComponent from './container/LoadComponent.js';

class App extends Component {
  render() {
    const pageDefinition = {
      container: {
        nav: 1,
        article: {
          title: 1,
          description: 1,
        },
      },
    }

    return (
        <LoadComponent name='pageDefinition' json={{pageDefinition}}/>
        // <LoadComponent name='container' json={pageDefinition}/>
    );
  }
}

export default App;
