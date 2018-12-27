import React, { Component } from 'react';
import { connect } from 'react-redux';


let cartCounter = props => {
  return (<h3><i className="badge badge-danger"> {props.selectedItems} </i></h3>)
}

let mapStateToProps = state => ({
  selectedItems: state.total
})

export default connect(mapStateToProps)(cartCounter)