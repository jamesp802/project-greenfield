import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Ratings from 'react-ratings-declarative';
import Form from 'react-bootstrap/Form';
import Stars from './Stars';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rating: 0,
      ratingDefiniton: '',
      ratingShow: false,
    };
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(newRating) {
    this.setState(
      {
        rating: newRating,
      },
      () => {
        console.log('curent state', this.state.rating);
        if (this.state.rating === 1) {
          this.setState({
            ratingDefiniton: 'Poor',
            ratingShow: true,
          });
        } else if (this.state.rating === 2) {
          this.setState({
            ratingDefiniton: 'Fair',
            ratingShow: true,
          });
        } else if (this.state.rating === 3) {
          this.setState({
            ratingDefiniton: 'Average',
            ratingShow: true,
          });
        } else if (this.state.rating === 4) {
          this.setState({
            ratingDefiniton: 'Good',
            ratingShow: true,
          });
        } else {
          this.setState({
            ratingDefiniton: 'Great',
            ratingShow: true,
          });
        }
      }
    );
  }

  handleShow() {
    console.log('clicked!');
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleShow()}>
          Add Review +
        </Button>
        <Modal show={this.state.show} onHide={() => this.handleShow()}>
          <Modal.Header closeButton>
            <Modal.Title>Write Your Review</Modal.Title>
            About the [Product Name Here]
          </Modal.Header>
          <br />
          <Modal.Body
            style={{
              maxHeight: 'calc(100vh - 210px)',
              overflowY: 'auto',
            }}
          >
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <label>Overall rating: </label> <br />
                {/* STARS RATINGS */}
                <Ratings
                  rating={this.state.rating}
                  widgetRatedColors="black"
                  changeRating={this.changeRating}
                >
                  <Ratings.Widget widgetDimension="15px" />
                  <Ratings.Widget widgetDimension="15px" />
                  <Ratings.Widget widgetDimension="15px" />
                  <Ratings.Widget widgetDimension="15px" />
                  <Ratings.Widget widgetDimension="15px" />
                </Ratings>
                <span style={{ display: 'inline-block', marginLeft: '25px' }}>
                  {this.state.ratingShow ? (
                    <p>{this.state.ratingDefiniton}</p>
                  ) : (
                    <p></p>
                  )}
                </span>
                {/* THIS IS RECOMMENDATION */}
                <div className="checkbox-inline">
                  <p>Do you recommend this product?</p>
                  <label>
                    <input type="radio" name="radiobutton" />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="radiobutton" />
                    No
                  </label>
                </div>
                {/* THESE ARE CHARACTERISTICS */}
                <div>
                  <p>Select Characteristics</p>
                  {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
                    (char, i) => {
                      return (
                        <div key={i}>
                          <label style={{ display: 'inline-flex' }}>
                            <input type="checkbox" name="checkboxbutton" />
                            {char}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
                {/* THIS IS REVIEW SUMMARY */}
                <div>
                  <p>Review Summary:</p>
                  <textarea
                    maxLength="50"
                    placeholder="Example: Best purchase ever!"
                  ></textarea>
                </div>
                {/* REVIEW BODY */}
                <div>
                  <p>Review Body: </p>
                  <textarea
                    maxLength="1000"
                    minLength="50"
                    rows="4"
                    cols="50"
                    placeholder="Why did you like the product or not?"
                  ></textarea>
                </div>
                <br />
                {/* photo upload */}
                <div>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Upload up to 5 pictures! "
                  />
                </div>
                <br />
                {/* nickname */}
                <div>
                  <p>Username:</p>
                  <textarea
                    maxLength="60"
                    placeholder="Example: jackson11!"
                  ></textarea>
                  <span style={{ display: 'block', fontSize: '12px' }}>
                    For privacy reasons, do not use your full name or email
                    address
                  </span>
                </div>
                {/* email */}
                <div>
                  <p>Email:</p>
                  <textarea
                    maxLength="60"
                    placeholder="Example: jackson11@email.com"
                  ></textarea>
                  <span style={{ display: 'block', fontSize: '12px' }}>
                    For authentication reasons, you will not be emailed
                  </span>
                </div>
              </div>
            </form>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleShow()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleShow()}>
              Submit Review!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddReview;
