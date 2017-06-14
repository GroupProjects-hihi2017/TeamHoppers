import request from 'superagent'

export const receiveOrgs = (orgs) => {
  return {
    type: 'RECEIVE_ORGS',
    orgs
  }
}

export function getOrgs () {
  return (dispatch) => {
    request
      .get(`/api/orgs`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveOrgs(res.body))
      })
  }
}
