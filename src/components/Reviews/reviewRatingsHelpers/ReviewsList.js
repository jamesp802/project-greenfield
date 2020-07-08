import React from 'react';
import ReviewTile from './ReviewTile';
import AddReview from './AddReview';
import Button from 'react-bootstrap/Button';

const ReviewsList = (props) => {
  return (
    <div>
      <div>
        <ReviewTile reviews={props.reviews} />
        <AddReview />
        {props.reviews.length > 2 ? (
          <Button style={{ marginRight: '50px' }}>More Reviews</Button>
        ) : null}
        <Button variant="primary" onClick={() => this.handleShow()}>
          Add Review +
        </Button>
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
