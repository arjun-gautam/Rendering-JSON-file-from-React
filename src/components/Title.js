import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class Title extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div className="title">
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default Title;
