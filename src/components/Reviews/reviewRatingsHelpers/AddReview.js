import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Ratings from 'react-ratings-declarative';
import Stars from './Stars';
import Form from './ReviewForm';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rating: 0,
      ratingDefiniton: '',
      ratingShow: false,
      rec: null,
      file: null,
    };
    this.changeRating = this.changeRating.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
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
    this.setState({
      show: true,
    });
  }

  handlePhotoChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  closeModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <Button
          style={{ borderColor: 'black' }}
          variant="light"
          onClick={() => this.handleShow()}
        >
          Add Review +
        </Button>
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Write Your Review</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              maxHeight: 'calc(100vh - 210px)',
              overflowY: 'auto',
            }}
          >
            About the [Product Name Here]
            <Form />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
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

{
  /* <div key={i}>
                          <label style={{ display: 'inline-flex' }}>
                            <input type="checkbox" name="checkboxbutton" />
                            {char}
                          </label>
                        </div> */
}
