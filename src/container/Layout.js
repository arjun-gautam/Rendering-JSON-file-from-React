import React from 'react';
import ComtentRenderer from './ContentRenderer';

export default function Layout(props) {
  return (
    <ComtentRenderer json={props.context.props.json} name={props.context.props.name}>
      {props.children}
    </ComtentRenderer>
  );
}
