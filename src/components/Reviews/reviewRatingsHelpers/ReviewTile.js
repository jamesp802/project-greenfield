import React from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';
import getDate from './reviewHelpers';

const ReviewTile = (props) => {
  return (
    <div className="review-tile">
      {props.reviews.map((review, i) => {
        return (
          <React.Fragment key={i}>
            <span style={{ display: 'inline-block', marginRight: '20%' }}>
              <Stars ratings={review.rating} />
            </span>
            <span style={{ display: 'inline-block' }}>
              {getDate(review.date)}
            </span>
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
              <span>
                {review.photos.map((photo, i) => {
                  return (
                    <img
                      key={i}
                      src={photo.url}
                      style={{
                        maxWidth: '150px',
                        height: 'auto',
                        display: 'inline-block',
                      }}
                    ></img>
                  );
                })}
              </span>
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

export default ReviewTile;

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews.reviewsData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: (url) => dispatch(getReviews(url)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReviewTile);
