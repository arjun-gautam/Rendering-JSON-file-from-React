import React, { Component } from 'react';

import UniversalComponent from '../components/UniversalComponent';

class LoadComponent extends Component {
  render() {
      return <UniversalComponent name={this.props.name} id={this.props.id} json={this.props.json} />;
  }
}

export default LoadComponent;
