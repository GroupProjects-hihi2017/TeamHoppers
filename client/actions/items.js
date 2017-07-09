import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    items
  }
}

export function getItems () {
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


export const addNewItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function addItem (item, callback) {
  request
    .post(`/api/items`)
    .send(item)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      callback()
    })
}
