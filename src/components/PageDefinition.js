import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class PageDefinition extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div className="page-definition">
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default PageDefinition;
