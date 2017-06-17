import {combineReducers} from 'redux'

import items from './items'
import categories from './categories'
import joinItemToOrgs from './joinItemToOrgs'
import listOrgs from './listOrgs'

export default combineReducers({
  items,
  categories,
  joinItemToOrgs,
  listOrgs
})
