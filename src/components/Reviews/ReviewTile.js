import React from 'react';
import { connect } from 'react-redux';

const ReviewTile = (props) => {
  return (
    <div>
      {props.reviews.length} reviews, sorted by:{' '}
      <select>
        <option>test1</option>
        <option>test2</option>
        <option>test3</option>
      </select>
      <br />
      <br />
      {props.reviews.map((review, i) => {
        return (
          <React.Fragment key={i}>
            <span style={{ display: 'inline-block', marginRight: '50%' }}>
              Rating (stars): {review.rating}
            </span>
            <span style={{ display: 'inline-block' }}>Date: {review.date}</span>
            <br />
            <span style={{ display: 'block' }}>
              <strong className="reviewTitle">{review.summary}</strong>
            </span>
            <span style={{ display: 'inline-block' }}>
              Username: {review.reviewer_name}
            </span>
            <br />
            <p>{review.body}</p>
            <br />
            {review.photos.length > 0 ? (
              <p>
                {review.photos.map((photo, i) => {
                  return (
                    <img
                      key={i}
                      src={photo.url}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    ></img>
                  );
                })}
              </p>
            ) : (
              <p>Insert photos!</p>
            )}

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
