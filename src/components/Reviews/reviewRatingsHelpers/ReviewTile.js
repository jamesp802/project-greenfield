import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Stars from './Stars';
import getDate from './reviewHelpers';
import { render } from 'react-dom';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      photo: '',
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(e) {
    console.log('this is e.target: ', e.target.src);
    this.setState({
      show: true,
      photo: e.target.src,
    });
  }

  closeModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div className="review-tile">
        {this.props.reviews.map((review, i) => {
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
                      <>
                        <img
                          class="img-thumbnail"
                          key={i}
                          src={photo.url}
                          style={{
                            width: '100px',
                            height: '100px',
                            display: 'inline-block',
                          }}
                          onClick={(e) => this.showModal(e)}
                        ></img>
                        <Modal show={this.state.show} onHide={this.closeModal}>
                          <Modal.Header closeButton></Modal.Header>
                          <Modal.Body>
                            <img src={this.state.photo} class="img-fluid"></img>
                          </Modal.Body>
                        </Modal>
                      </>
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
  }
}

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
