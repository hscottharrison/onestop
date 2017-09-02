import React from 'react';

export default function ListItem (props) {

  return (
    <li className={props.classes}>{props.value}</li>
  )
}
