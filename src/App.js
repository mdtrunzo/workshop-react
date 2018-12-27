import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import ProductsList from './components/ProductsList'
import Navbar from './components/navbar'
import { Button, Title, P } from './components/styles/index'
import { INCREMENT } from './actions'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

class App extends Component {

  componentWillMount() {
    fetch('http://localhost:3001/products/')
      .then(response => response.json())
      .then(response => {
        this.props.fillProducts(response)
      })
  }
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col1">
            <Navbar />
            <h1 className="tituloPrincipal">CARRITO</h1>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
            >

              <h1>Modal</h1>
            </Modal>
            <ProductsList />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  total: state.total
})

let mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: INCREMENT }),
  fillProducts: (products) => dispatch({ type: 'FETCH_PRODUCTS', products })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);




