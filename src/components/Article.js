import React, { Component } from 'react';
import Layout from '../container/Layout';
import Data from '../container/Data';

class Article extends Component {
  render() {
    var data = <Data context={this} />;
    return (
      <div className="article">
        <Layout context={this}>
          {data}
        </Layout>
      </div>
    );
  }
}

export default Article;
