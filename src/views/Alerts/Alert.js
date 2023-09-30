import React from 'react';
import './Alert.css';

export default function Alert(props) {
  return (
    props.alert && 
        <div className={`alert alert-${props.alert.type.toLowerCase()} sm-alert wsnw`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
        </div>
  )
}
