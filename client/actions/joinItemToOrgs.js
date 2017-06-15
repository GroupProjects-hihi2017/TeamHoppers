import request from 'superagent'

export const receiveOrgsByItem = (joinItemToOrgs) => {
  return {
    type: 'RECEIVE_ORGS_BY_ITEM',
    joinItemToOrgs
  }
}

export function getOrgsByItem () {
  return (dispatch) => {
    request
      .get(`/api/joins`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveOrgsByItem(res.body))
      })
  }
}
