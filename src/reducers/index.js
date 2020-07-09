import { combineReducers } from 'redux';

import reviewReducer from './Reviews/getReviews';
import currentProductInfo from './OverviewReducers/productInfoReducer'
import currentProductStyleList from './OverviewReducers/currentProductStyleList'
import metaData from './OverviewReducers/metaData'

export default combineReducers({
  metaData,
  reviews: reviewReducer,
  currentProductInfo,
  currentProductStyleList
});

