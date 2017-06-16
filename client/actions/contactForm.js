import request from 'superagent'

export const postContactForm = (form) => {
  return (dispatch) => {
    request
      .post('/contact')
      .send(form)
      .end((err, res) => {
        console.log({err, res})
        dispatch({
          type: 'INIT'
        })
      })
  }
}
