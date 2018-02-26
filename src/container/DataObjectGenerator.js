import React, { Component } from 'react';

class DataObjectGenerator extends Component {
  render() {
    console.log(this.props.dataType, '>>', this.props.component, '>>' , this.props.data );
    if(this.props.dataType === 'Array of String' && this.props.component === 'nav') {
      return (
        <ul>
          {this.props.data.map((menuItem) => {
            return <li key={menuItem}>{menuItem}</li>
          })}
        </ul>
      );
    }
    else if(this.props.dataType === 'String' && this.props.component === 'title') {
      return (this.props.data);
    }
    else if(this.props.dataType === 'String' && this.props.component === 'description') {
      return (this.props.data);
    }
    else {
      return <div />;
    }
  }
}

export default DataObjectGenerator;
