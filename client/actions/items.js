import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    items
  }
}

export function getItems() {
  return (dispatch) => {
    request
      .get(`/api/items`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}
