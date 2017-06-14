import {combineReducers} from 'redux'

  import orgs from './orgs'
  import items from './items'

export default combineReducers({
  items,
  orgs
})
