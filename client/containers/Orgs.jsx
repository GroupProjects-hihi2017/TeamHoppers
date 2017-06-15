import React from 'react'
import {connect} from 'react-redux'

import {getOrgs} from '../actions/orgs'

const Orgs = props => {
    props.dispatch(getOrgs())
    console.log(props);

  return (
    <div>
      <ul className='cats'>
        {props.orgs.map((org, i) => <li key={i}>{org} </li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    orgs: state.orgs
  }
}


export default connect(mapStateToProps)(Orgs)


const renderOrg = (org, key) => (
  <div className = 'snack-box'>
    <h1 className='org-name' key={key}>{org.org_name}</h1>
  </div>
)

const Snack = ({snack, dispatch, isVisible}) => (
  <div>
    <div className = 'button-div'>
      <button className="button" onClick={() => dispatch(getSnack())}>
        CHOW!
      </button>
    </div>
    {isVisible && renderSnack(snack)}

  </div>
)

const mapStateToProps = (state) => {
return {snack: state.snack, isVisible:state.isVisible.snack}

}
