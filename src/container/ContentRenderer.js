import React, { Component } from 'react';
import LoadComponent from './LoadComponent';

class ContentRenderer extends Component {
  constructor(props) {
    super(props);
    this.passedProps = props;
  }
  render(props) {
    if(Number.isInteger(this.passedProps.json[this.passedProps.name])) {
      return(this.passedProps.children);
    }
    else{
      return Object.keys(this.passedProps.json[this.passedProps.name]).map((objStr) => {
        return <LoadComponent
          key={objStr}
          name={objStr}
          id={Number.isInteger(this.passedProps.json[this.passedProps.name]) && this.passedProps.json[this.passedProps.name]}
          json={!Number.isInteger(this.passedProps.json[this.passedProps.name]) && this.passedProps.json[this.passedProps.name]}
        />
      });
    }
    // return (
    //   <span>
    //     {/* rendering content*/ }
    //     {/*********************************************COMPONENT DESCRIPTION***************************************************/}
    //     {Number.isInteger(this.passedProps.json[this.passedProps.name]) && this.passedProps.children}
    //     {/*********************************************COMPONENT DESCRIPTION***************************************************/}
    //     {/* Iteration for Depth scanning*/ }
    //     {Object.keys(this.passedProps.json[this.passedProps.name]).map((objStr) => {
    //       return <LoadComponent
    //         key={objStr}
    //         name={objStr}
    //         id={Number.isInteger(this.passedProps.json[this.passedProps.name]) && this.passedProps.json[this.passedProps.name]}
    //         json={!Number.isInteger(this.passedProps.json[this.passedProps.name]) && this.passedProps.json[this.passedProps.name]}
    //       />
    //     })}
    //   </span>
    // );
  }
}

export default ContentRenderer;
