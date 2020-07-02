import React from 'react';
import { connect } from 'react-redux';

const ReviewTile = (props) => {
  return (
    <div>
      {props.reviews.map((review) => {
        return (
          <React.Fragment>
            <h1 className="reviewTitle">{review.summary}</h1>
            <span>Rating: {review.rating} | </span>
            <span>Date: {review.date}</span>
            <br />
            <p>{review.body}</p>
            <br />
            <p>this is the footer </p>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTile);
