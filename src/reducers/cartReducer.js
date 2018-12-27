const ADD_TO_CART = 'ADD_TO_CART'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state = [...state, state.concat(action.product)]
      break
  }

  return state
}