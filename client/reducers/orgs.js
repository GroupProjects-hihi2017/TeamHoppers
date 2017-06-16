function orgs (state = [], action = {}) {
  switch (action.type) {
    case 'RECEIVE_ORGS':
      return action.orgs
    default:
      return state
  }
}

export default orgs
