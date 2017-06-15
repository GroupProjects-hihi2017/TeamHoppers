import request from 'superagent'

export const receiveCategories = (categories) => {
  console.log(categories);
  return {
    type: 'RECEIVE_CATEGORIES',
    categories
  }
}

export function getCategories () {
  return (dispatch) => {
    request
      .get(`/api/categories`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCategories(res.body))
      })
  }
}
