import { combineReducers } from 'redux';
import counts from './productList';
import data from './getData';

import reviewReducer from './Reviews/getReviews';
import currentProductInfo from './OverviewReducers/productInfoReducer'
import currentProductStyleList from './OverviewReducers/currentProductStyleList'
import metaData from './OverviewReducers/metaData'

export default combineReducers({
  metaData,
  counts,
  data,
  reviews: reviewReducer,
  currentProductInfo,
  currentProductStyleList
});

