import { combineReducers } from 'redux';
import counts from './productList';
import data from './getData';
import currentProductInfo from './OverviewReducers/productInfoReducer'
import currentProductStyleList from './OverviewReducers/currentProductStyleList'

export default combineReducers({
  counts,
  data,
  currentProductInfo,
  currentProductStyleList
});