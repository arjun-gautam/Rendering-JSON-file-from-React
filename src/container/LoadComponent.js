import React, { Component } from 'react';

import PageDefinition from '../components/PageDefinition';
import Container from '../components/Container';
import Nav from '../components/Nav';
import Article from '../components/Article';
import Title from '../components/Title';
import Description from '../components/Description';

class LoadComponent extends Component {
  render() {
    switch(this.props.name) {
      case 'pageDefinition':
        return <PageDefinition name={this.props.name} id={this.props.id} json={this.props.json} />;
      case 'container':
        return <Container name={this.props.name} id={this.props.id} json={this.props.json} />;
      case 'nav':
        return <Nav name={this.props.name} id={this.props.id} json={this.props.json} />;
      case 'article':
        return <Article name={this.props.name} id={this.props.id} json={this.props.json} />;
      case 'title':
        return <Title name={this.props.name} id={this.props.id} json={this.props.json} />;
      case 'description':
        return <Description name={this.props.name} id={this.props.id} json={this.props.json} />;
      default:
        return <div>Couldn&#39;t render an item</div>;
    }
  }
}

export default LoadComponent;
