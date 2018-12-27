import React, { Component } from "react";
import "../styles/product.css";
import { connect } from "react-redux";
import Modal from 'react-modal';

class Product extends Component {
  buy = () => {
    this.props.incrementCartCounter()
    this.props.decrementProductStock(this.props.data.id)
    this.forceUpdate();
  };


  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          <h1>{this.props.data.title}</h1>
        </div>

        <div className="card-body">
          <p>{this.props.data.description}</p>
        </div>


        <p>
          Stock:
          {this.props.data.stock !== 0 ? this.props.data.stock : "No hay stock"}
        </p>
        <button
          className="btn btn-success"
          onClick={this.buy}
          disabled={this.props.stock !== 0 ? false : true}
        >
          Comprar
        </button>
        <button
          className="btn btn-danger"
          onClick={this.buy}
          disabled={this.props.stock !== 0 ? false : true}
        >
          Más info
        </button>
      </div >

    );
  }
}

let mapDispatchToProps = dispatch => ({
  incrementCartCounter: () => dispatch({ type: 'INCREMENT' }),
  decrementProductStock: (id) => dispatch({
    type: 'DECREMENT_STOCK',
    id: id
  })
})


export default connect(null, mapDispatchToProps)(Product);

