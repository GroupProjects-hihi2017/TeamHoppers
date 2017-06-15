function joinItemToOrgs (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ORGS_BY_ITEM':
      return action.joinItemToOrgs
    default:
      return state
  }
}

export default joinItemToOrgs
