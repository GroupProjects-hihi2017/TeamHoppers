import request from 'superagent'

export const postContactForm = (form) => {
  return (dispatch) => {
    console.log({form})
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
