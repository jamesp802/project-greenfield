import React from 'react';
import ReviewTile from './ReviewTile';
import AddReview from './AddReview';
import SortingView from './SortingView';
import Button from 'react-bootstrap/Button';

const ReviewsList = (props) => {
  return (
    <div>
      <div>
        <SortingView productId={props.productId} />
        <br />
        <ReviewTile reviews={props.reviews} />
        <div className="button-container">
          {props.show ? (
            <Button
              style={{ borderColor: 'black' }}
              variant="light"
              className="more-reviews-btn"
              onClick={props.clickHandler}
            >
              More Reviews
            </Button>
          ) : (
            <p></p>
          )}
          <AddReview
            loadMoreReviews={props.loadMoreReviews}
            name={props.name}
            productId={props.productId}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
