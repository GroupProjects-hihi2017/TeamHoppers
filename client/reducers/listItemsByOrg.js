function listItemsByOrg (state = [], action) {
  switch (action.type) {
    case 'LIST_ITEMS_BY_ORG':
      return action.allItems
    default:
      return state
  }
}

export default listItemsByOrg
