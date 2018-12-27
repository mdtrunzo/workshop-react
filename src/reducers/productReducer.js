let productReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      state = state.concat(action.products)
      break;
    case 'DECREMENT_STOCK':
      state: state.map(product => {
        if (product.id === action.id) {
          product.stock--
        }
        return product
      })

  }
  return state;
}

export default productReducer;