function listOrgs (state = [], action = {}) {
  switch (action.type) {
    case 'LIST_ORGS':
      return action.orgs

    case 'ADD_ORG':
      return [...state, action.org]

    case 'INIT':
      return state

    default:
      return state
  }
}

export default listOrgs
