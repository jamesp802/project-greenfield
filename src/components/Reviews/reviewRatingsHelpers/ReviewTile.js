import React from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';
<<<<<<< HEAD
=======
import SortingView from './SortingView';
>>>>>>> c60c39fe9c81bf49efd6b02c862afa03e51635b2

const ReviewTile = (props) => {
  return (
    <div>
      <SortingView />
      {/* {JSON.stringify(props.reviews)} */}
      <br />
      {props.reviews.map((review, i) => {
        return (
          <React.Fragment key={i}>
            <span style={{ display: 'inline-block', marginRight: '20%' }}>
              <Stars ratings={review.rating} />
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
