import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/ReviewActions/actions';
import RatingsBreakdown from './reviewRatingsHelpers/RatingsBreakdown';
import ReviewsList from './reviewRatingsHelpers/ReviewsList';
import './reviewsStyle.css';

class RatingsAndReviews extends React.Component {
  // add state and method
  componentDidMount() {
    this.props.getData(`http://18.224.200.47/reviews/4/list`);
  }

  render() {
    return (
      <div className="ratingsReviewContainer">
        <div className="ratingsBreakdown">
          <RatingsBreakdown />
        </div>
        <div className="reviewsList">
          <ReviewsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getReviews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
