const INCREMENT = 'INCREMENT'

export default function (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state = state + 1
      break;
  }
  return state
}