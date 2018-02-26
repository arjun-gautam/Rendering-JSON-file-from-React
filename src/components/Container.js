import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class Container extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div className="container">
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default Container;
