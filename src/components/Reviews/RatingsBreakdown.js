import React from 'react';
import RatingSummary from './RatingSummary';
import StarBreakdown from './StarBreakdown';

const RatingsBreakdown = (props) => {
  return (
    <div>
      <div>
        <RatingSummary />
      </div>
      <br />
      <span>100% of reviews recommend this product</span>
      <br />
      <div>
        <StarBreakdown />
      </div>
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
