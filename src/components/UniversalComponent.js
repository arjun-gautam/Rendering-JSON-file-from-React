import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class ComponentName extends Component {
  render() {
    var className=this.props.name;
    var layout = <Layout context={this}><Data context={this} /></Layout>;
    return (<div className={className}>{layout}</div>);
  }
}

export default ComponentName;
