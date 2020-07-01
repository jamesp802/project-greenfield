import { combineReducers } from 'redux';
import counts from './productList';
import data from './getData';

export default combineReducers({
  counts,
  data
});