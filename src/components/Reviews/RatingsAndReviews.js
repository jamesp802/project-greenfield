import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/ReviewActions/actions';
import RatingsBreakdown from './RatingsBreakdown';
import ReviewsList from './ReviewsList';

class RatingsAndReviews extends React.Component {
  componentDidMount() {
    this.props.getData(`http://18.224.200.47/reviews/4/list`);
  }

  render() {
    return (
      <div className="ratingsAndReviews">
        <div
          style={{
            width: '30%',
            float: 'left',
          }}
        >
          <RatingsBreakdown />
        </div>
        <div style={{ width: '60%', display: 'inline-block', marginLeft: 20 }}>
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
