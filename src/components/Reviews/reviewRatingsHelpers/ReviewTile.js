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
            <div className="stars-user-date">
              <span style={{ display: 'inline-block', marginRight: '20%' }}>
                <Stars ratings={review.rating} />
              </span>
              <span style={{ display: 'inline-block', float: 'right' }}>
                {review.reviewer_name}, {getDate(review.date)}
              </span>
            </div>
            <br />
            <p id="review-summary">
              <strong className="reviewTitle">{review.summary}</strong>
            </p>
            <br />
            <p>{review.body}</p>
            <br />
            {review.photos.length > 0 ? (
              <span>
                {review.photos.map((photo, i) => {
                  return (
                    <a href={photo.url}>
                      <img
                        class="img-thumbnail"
                        key={i}
                        src={photo.url}
                        style={{
                          width: '100px',
                          height: '100px',
                          display: 'inline-block',
                        }}
                      ></img>
                    </a>
                  );
                })}
              </span>
            ) : null}

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
