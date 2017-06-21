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
      })
  }
}

export const addNewOrg = (org) => {
  return {
    type: 'ADD_ORG',
    org
  }
}


export function addOrg (org, callback) {
  console.log({org, callback});
    request
      .post(`/api/orgs`)
      .send(org)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        callback()
      })
}
//
// export function addOrg (org, callback) {
//   return (dispatch) => {
//     request
//       .post(`/api/orgs`)
//       .send(org)
//       .end((err, res) => {
//         if (err) {
//           console.error(err.message)
//           return
//         }
//         callback()
//         dispatch(addNewOrg(res.body))
//       })
//   }
// }
