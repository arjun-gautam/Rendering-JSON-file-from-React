import React, { Component } from 'react';
import LoadComponent from '../LoadComponent';

class DataObjectGenerator extends Component {
  render() {
    console.log(this.props.dataType, '>>', this.props.component, '>>' , this.props.data );

    // MENU
    if(this.props.dataType === 'Array of String' && this.props.component === 'nav') {
      return (
        <ul>
          {this.props.data.map((menuItem) => {
            return <li key={menuItem}>{menuItem}</li>
          })}
        </ul>
      );
    }

    // TITLE
    else if(this.props.dataType === 'String' && this.props.component === 'title') {
      return (this.props.data);
    }

    // DESCRIPTON
    else if(this.props.dataType === 'String' && this.props.component === 'description') {
      return (this.props.data);
    }

    // LAYOUT
    else if(this.props.dataType === 'Object' && this.props.component === 'layout') {
      return <LoadComponent name='container' json={this.props.data}/>
    }

    // NOTHING
    else {
      return <div />;
    }
  }
}

export default DataObjectGenerator;
