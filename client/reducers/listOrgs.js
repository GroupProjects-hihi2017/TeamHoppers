function listOrgs (state = [], action = {}) {
  switch (action.type) {
    case 'LIST_ORGS':
      return action.orgs

    case 'ADD_ORG':
      return action.org

    case 'INIT':
      return state

    default:
      return state
  }
}

export default listOrgs
