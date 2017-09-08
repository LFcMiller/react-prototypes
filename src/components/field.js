import React from 'react';

export default (props) => {
  return (<div className="form-group">
    <label>{props.label}</label>
    <input name={props.name} type={props.type} value={props.value} onChange={props.onChange} className="form-control"/>
  </div>)
}