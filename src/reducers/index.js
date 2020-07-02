import { combineReducers } from 'redux';
import counts from './productList';
import data from './getData';

import reviewReducer from './Reviews/getReviews';
import currentProductInfo from './OverviewReducers/productInfoReducer'
import currentProductStyleList from './OverviewReducers/currentProductStyleList'

export default combineReducers({
  counts,
  data,
  reviews: reviewReducer,
  currentProductInfo,
  currentProductStyleList
});

