import React, { Component } from 'react';
import LoadComponent from '../container/LoadComponent';

class Description extends Component {
  render() {
    return (
      <div style={{border: '5px solid #fa6', padding: '5px', margin: '5px'}}>
        // rendering content
        {this.props.name}
        {Number.isInteger(this.props.json[this.props.name]) && <span> has id</span>}
        {!Number.isInteger(this.props.json[this.props.name]) && <span> has json</span>}

        {/* Iteration for Depth scanning*/ }
        {Object.keys(this.props.json[this.props.name]).map((objStr) => {
          return <LoadComponent
            key={objStr}
            name={objStr}
            id={Number.isInteger(this.props.json[this.props.name]) && this.props.json[this.props.name]}
            json={!Number.isInteger(this.props.json[this.props.name]) && this.props.json[this.props.name]}
          />
        })}
      </div>
    );
  }
}

export default Description;
