import {combineReducers} from 'redux'

  import orgs from './orgs'
  import items from './items'
  import categories from './categories'

export default combineReducers({
  items,
  orgs,
  categories
})
