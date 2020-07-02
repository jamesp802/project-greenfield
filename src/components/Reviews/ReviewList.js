import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/ReviewActions/actions';
import ReviewTile from './ReviewTile';

class ReviewsList extends React.Component {
  componentDidMount() {
    this.props.getData(`http://18.224.200.47/reviews/1/list`);
  }

  render() {
    return (
      <div>
        <ReviewTile />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

/* const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, null)(ReviewsList); */
