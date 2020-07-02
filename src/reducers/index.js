import { combineReducers } from 'redux';
import counts from './productList';
import data from './getData';
import reviewReducer from './Reviews/getReviews';

export default combineReducers({
  counts,
  data,
  reviews: reviewReducer,
});
