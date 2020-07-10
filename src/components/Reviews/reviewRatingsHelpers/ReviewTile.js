import React from 'react';
import { Check2 } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Stars from './Stars';
import { getDate } from './reviewHelpers';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      addedHelp: false,
      photo: '',
      reviewsForHelp: [],
    };
    this.editState = this.editState.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      reviewsForHelp: this.props.reviews,
    });
  }

  editState() {
    this.setState({
      reviewsForHelp: [...this.state.reviewsForHelp, this.props.reviews],
    });
  }

  showModal(e) {
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
              {review.recommend ? (
                <p>
                  <span>
                    <Check2 />
                  </span>{' '}
                  I recommend this product
                </p>
              ) : null}
              {review.response ? (
                <div className="response">
                  <strong>Reponse:</strong> {review.response}
                </div>
              ) : null}
              {review.photos.length > 0 ? (
                <span>
                  {review.photos.map((photo, i) => {
                    return (
                      <React.Fragment key={i}>
                        <img
                          className="img-thumbnail"
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
                            <img
                              src={this.state.photo}
                              className="img-fluid"
                            ></img>
                          </Modal.Body>
                        </Modal>
                      </React.Fragment>
                    );
                  })}
                </span>
              ) : null}
              <p className="helpful">
                Helpful?{' '}
                {!this.state.addedHelp ? (
                  <>
                    <span
                      className="add-help"
                      style={{ textDecoration: 'underline' }}
                    >
                      Yes
                    </span>
                    ({review.helpfulness})
                  </>
                ) : (
                  <>
                    <span
                      className="add-help"
                      style={{ textDecoration: 'underline' }}
                    >
                      Yes
                    </span>
                    ({review.helpfulness})
                  </>
                )}{' '}
                |{' '}
                <span
                  className="add-help"
                  style={{ textDecoration: 'underline' }}
                >
                  Report
                </span>
              </p>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default ReviewTile;
