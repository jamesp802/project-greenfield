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
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header>
            <Modal.Title>Write Your Review</Modal.Title>
            About the [Product Name Here]
          </Modal.Header>
          <br />
          <Modal.Body>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <label>Overall rating: </label> <br />
                <Ratings
                  rating={this.state.rating}
                  widgetRatedColors="black"
                  changeRating={this.changeRating}
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>
                <span style={{ display: 'inline-block', marginLeft: '25px' }}>
                  {this.state.ratingShow ? (
                    <p>{this.state.ratingDefiniton}</p>
                  ) : (
                    <p></p>
                  )}
                </span>
                {/* </div>
              <br />
              <div>
                <p>Do you recommend this product? </p>
                <br />
                <input type="radio">
                  <label for="male">Yes</label>
                </input>
                <input label="no" type="radio" name="recNo"></input>
              </div>
              <div> */}
                <div className="radio">
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
                <label>Body: </label> <br />
                <input
                  type="textarea"
                  name="body"
                  value={this.state.body}
                  onChange={(e) => this.handleChange(e)}
                ></input>
              </div>
            </form>
            {/* <Form>
              <Form.Group>
                <Form.Label>Overall rating: </Form.Label> <br />
                <Ratings
                  rating={this.state.rating}
                  widgetRatedColors="black"
                  changeRating={this.changeRating}
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>
                <span style={{ display: 'inline-block', marginLeft: '25px' }}>
                  {this.state.ratingShow ? (
                    <p>{this.state.ratingDefiniton}</p>
                  ) : (
                    <p></p>
                  )}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Label>Do you recommend this product?</Form.Label>
                <div type={`inline-radio`} className="mb-3">
                  <Form.Check inline label="Yes" id={1} />
                  <Form.Check inline label="No" id={2} />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form> */}
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleShow()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleShow()}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddReview;
