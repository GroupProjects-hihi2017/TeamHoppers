import {combineReducers} from 'redux'

  import orgs from './orgs'
  import items from './items'
  import categories from './categories'
  import joinItemToOrgs from './joinItemToOrgs'

export default combineReducers({
  items,
  orgs,
  categories,
  joinItemToOrgs
})
