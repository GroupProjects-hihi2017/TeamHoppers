function orgs (state = [], action = {}) {
  switch (action.type) {
    case 'LIST_ORGS':
      return action.orgs
    default:
      return state
  }
}

export default orgs
