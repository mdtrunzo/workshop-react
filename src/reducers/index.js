import { combineReducers } from 'redux'
import cart from './cartReducer'
import profile from './profileReducer'
import total from './totalReducer'
import productReducer from './productReducer'

let previewItem = function (state = {}, action) {
  switch (action.type) {
    case 'SET_ITEM':
      state = action.item
      break

    case 'UNSET_ITEM':
      state = {}
      break;
  }
  return state;
}

export default combineReducers({
  previewItem,
  cart,
  profile,
  total,
  products: productReducer,
})