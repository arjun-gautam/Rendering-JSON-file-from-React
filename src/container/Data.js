import React from 'react';
import Id from './Id';

export default function Data(props) {
  return (
    <Id name={props.context.props.name} id={props.context.props.json[props.context.props.name]} />
  );
}
