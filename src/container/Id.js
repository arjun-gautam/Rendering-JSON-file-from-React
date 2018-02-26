import React, { Component } from 'react';
import DataObjectGenerator from './DataObjectGenerator';

class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        '1':{value: ['Home','Services']},
        '2':{value: 'Title'},
        '3':{value: 'Description'},
        '4':{value: 'example string'},
        '5':{value: {container:{nav: 1}}},
        '6':{value: [{nav:1},{nav:1},{article:1}]},
      }
    };
    this.getDataType = this.getDataType.bind(this);
    this.analyzeArray = this.analyzeArray.bind(this);
    this.allIsBoolean = this.allIsBoolean.bind(this);
    this.allIsInt = this.allIsInt.bind(this);
    this.allIsFloat = this.allIsFloat.bind(this);
    this.allIsArray = this.allIsArray.bind(this);
    this.allIsString = this.allIsString.bind(this);
    this.allIsObject = this.allIsObject.bind(this);
  }

  allIsBoolean(array){
    let i=0;
    let isBoolean = true;
    for(i=0; i<array.length; i += 1) {
      if(!(array[i]===true || array[i]===false)) {
        isBoolean = false;
      }
    }
    return isBoolean;
  }
  allIsInt(array){
    let i=0;
    let isInt = true;
    for(i=0; i<array.length; i += 1) {
      if(!Number.isInteger(array[i])) {
        isInt = false;
      }
    }
    return isInt;
  }
  allIsFloat(array){
    let i=0;
    let isFloat = true;
    for(i=0; i<array.length; i += 1) {
      if(!(parseFloat(array[i], 10) === array[i])) {
        isFloat = false;
      }
    }
    return isFloat;
  }
  allIsArray(array){
    let arrayConstructor = {}.constructor;
    let i=0;
    let isArray = true;
    for(i=0; i<array.length; i += 1) {
      if( !(array[i].constructor === arrayConstructor) ) {
        isArray = false;
      }
    }
    return isArray;
  }
  allIsCharacter(array){
    let i=0;
    let isCharacter = true;
    for(i=0; i<array.length; i += 1) {
      if( array[i].length > 1 ) {
        isCharacter = false;
      }
    }
    return isCharacter;
  }
  allIsString(array){
    let i=0;
    let isString = true;
    for(i=0; i<array.length; i += 1) {
      if( !this.allIsCharacter(array[i]) ) {
        isString = false;
      }
    }
    return isString;
  }
  allIsObject(array){
    let objectConstructor = {}.constructor;
    let i=0;
    let isObject = true;
    for(i=0; i<array.length; i += 1) {
      if( !(array[i].constructor === objectConstructor) ) {
        isObject = false;
      }
    }
    return isObject;
  }

  analyzeArray(array) {
    if (this.allIsBoolean(array)) {
      return 'Array of Boolean';
    }
    else if (this.allIsInt(array)) {
      return 'Array of Int';
    }
    else if (this.allIsFloat(array)) {
      return 'Array of Float';
    }
    else if (this.allIsCharacter(array)) {
      return 'String';
    }
    else if (this.allIsObject(array)) {
      return 'Array of Object';
    }
    else if (this.allIsString(array)) {
      return 'Array of String';
    }
    else if (this.allIsArray(array)) {
      return 'Array of Array';
    }
    else {
      return false;
    }
  }

  getDataType(id) {
    let value = this.state.data[id].value;
    if(value === true || value === false) {
      return ('Boolean');
    }
    else if(parseInt(value, 10) === value) {
      return ('Integer');
    }
    else if(parseFloat(value, 10) === value) {
      return ('Float');
    }
    else if(value.length >= 0) {
      const arrayType = this.analyzeArray(value);
      return (arrayType);
    }
    else if( value.constructor === {}.constructor ) {
      return ('Object');
    }
    else {
      return false;
    }
  }

  render() {
    // let dataType = this.getDataType(this.props.id);
    console.log();
    return <DataObjectGenerator component={this.props.name} dataType={this.getDataType(this.props.id)} data={this.state.data[this.props.id].value}/>;
  }
  // render() {
  //   let dataType = this.getDataType(this.props.id);
  //   console.log(dataType, this.state.data[this.props.id].value);
  //   if(dataType === 'Object') {
  //     let object = this.state.data[this.props.id].value;
  //     object={container: object};
  //     return (
  //       <LoadComponent name='container' json={object}/>
  //     );
  //   }
  //   else if(dataType === 'Array of Object') {
  //     let arrayOfObject = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfObject.map((object)=>{
  //       const obj={container: object};
  //       return <LoadComponent key={Math.floor(Math.random() * 1000)} name='container' json={obj}/>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Array of Boolean') {
  //     let arrayOfBoolean = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfBoolean.map((boolean)=>{
  //       return <span key={Math.floor(Math.random() * 1000)}>{boolean}</span>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Array of Int') {
  //     let arrayOfInt = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfInt.map((int)=>{
  //       return <span key={Math.floor(Math.random() * 1000)}>{int}</span>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Array of Float') {
  //     let arrayOfFloat = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfFloat.map((float)=>{
  //       return <span key={Math.floor(Math.random() * 1000)}>{float}</span>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Array of String') {
  //     let arrayOfString = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfString.map((string)=>{
  //       return <span key={Math.floor(Math.random() * 1000)}>{string}</span>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Array of Array') {
  //     let arrayOfArray = this.state.data[this.props.id].value;
  //     let returningObj = arrayOfArray.map((array)=>{
  //       return <span key={Math.floor(Math.random() * 1000)}>{array}</span>
  //     });
  //     return returningObj;
  //   }
  //   else if(dataType === 'Boolean') {
  //     let boolean = this.state.data[this.props.id].value;
  //     return <span>{boolean}</span>;
  //   }
  //   else if(dataType === 'Integer') {
  //     let integer = this.state.data[this.props.id].value;
  //     return <span>{integer}</span>;
  //   }
  //   else if(dataType === 'Float') {
  //     let float = this.state.data[this.props.id].value;
  //     return <span>{float}</span>;
  //   }
  //   else if(dataType === 'String') {
  //     let string = this.state.data[this.props.id].value;
  //     return <span>{string}</span>;
  //   }
  //   else {
  //     return (
  //       <span />
  //     );
  //   }
  // }
}

export default Id;
