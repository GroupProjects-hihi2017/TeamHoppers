function items (state = [], action = {}) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return action.items

    case 'ADD_ITEMS':
      return [...state, action.items]

    case 'INIT':
      return state

    default:
      return state
  }
}

export default items
