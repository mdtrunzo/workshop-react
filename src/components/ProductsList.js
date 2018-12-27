import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

let ProductsList = (props) => {
  return (
    <div className="card-columns">
      {props.products.map(product => (
        <Product key={product.id} data={product} selected={false} />
      ))}
    </div>
  );

}

let mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductsList);