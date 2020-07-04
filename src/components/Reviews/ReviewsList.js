import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewsList = (props) => {
  return (
    <div>
      <div>
        <ReviewTile />
      </div>
    </div>
  );
};

export default ReviewsList;

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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, null)(ReviewsList); */
