import request from 'superagent'

export const listAllOrgs = (orgs) => {
  return {
    type: 'LIST_ORGS',
    orgs
  }
}

export function getAllOrgs () {
  return (dispatch) => {
    request
      .get(`/api/orgs`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(listAllOrgs(res.body))
        console.log(res.body);
      })
  }
}
