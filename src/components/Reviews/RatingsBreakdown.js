import React from 'react';
import RatingSummary from './RatingSummary';

const RatingsBreakdown = (props) => {
  return (
    <div>
      <RatingSummary />
    </div>
  );
};

export default RatingsBreakdown;

/* const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getReviews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingsBreakdown); */
