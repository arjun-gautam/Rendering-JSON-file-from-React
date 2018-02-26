import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class Description extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div className="description">
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default Description;
