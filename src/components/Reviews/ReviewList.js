import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/ReviewActions/actions';
import ReviewTile from './ReviewTile';
import Stars from './Stars';

class ReviewsList extends React.Component {
  componentDidMount() {
    this.props.getData(`http://18.224.200.47/reviews/4/list`);
  }

  render() {
    return (
      <div>
        <div>{/* <Stars /> */}</div>
        <div>
          <ReviewTile />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

/* const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, null)(ReviewsList); */
