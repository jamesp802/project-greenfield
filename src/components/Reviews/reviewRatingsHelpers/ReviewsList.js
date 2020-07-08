import React from 'react';
import ReviewTile from './ReviewTile';
import AddReview from './AddReview';
import SortingView from './SortingView';
import Button from 'react-bootstrap/Button';

const ReviewsList = (props) => {
  return (
    <div>
      <div>
        <SortingView />
        <br />
        <ReviewTile reviews={props.reviews} />
        <div className="button-container">
          {props.show ? (
            <Button className="more-reviews-btn" onClick={props.clickHandler}>
              More Reviews
            </Button>
          ) : (
            <p></p>
          )}

          <AddReview />
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;

/* const mapStateToProps = (state) => {
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, null)(ReviewsList); */
