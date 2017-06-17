import request from 'superagent'

export const listItemsByOrg = (allItems) => {
  return {
    type: 'LIST_ITEMS_BY_ORG',
    allItems
  }
}

export function getItemsByOrg () {
  return (dispatch) => {
    request
      .get(`/api/joins`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(listItemsByOrg(res.body))
      })
  }
}
