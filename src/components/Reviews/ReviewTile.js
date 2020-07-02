import React from 'react';
import { connect } from 'react-redux';

const ReviewTile = (props) => {
  return (
    <div>
      {props.reviews.map((review, i) => {
        return (
          <React.Fragment key={i}>
            <h1 className="reviewTitle">{review.summary}</h1>
            <span style={{ display: 'inline-block', marginRight: '50px' }}>
              Rating: {review.rating}
            </span>
            <span style={{ display: 'inline-block', marginRight: '50px' }}>
              Date: {review.date}
            </span>
            <span style={{ display: 'inline-block' }}>
              Username: {review.reviewer_name}
            </span>
            <br />
            <p>{review.body}</p>
            <br />
            <p>
              {review.photos.map((photo) => {
                return (
                  <img
                    src={photo.url}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  ></img>
                );
              })}
            </p>
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
