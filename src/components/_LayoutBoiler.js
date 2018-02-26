import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class ComponentName extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div>
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default ComponentName;
