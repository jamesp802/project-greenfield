import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { validateEmail } from "./questionsHelpers";
import axios from "axios";

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: "",
      photos: [],
    };
    this.addAnswer = this.addAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    // console.log(props);
  }

  addAnswer() {
    const question_id = this.props.question[1];
    const { body, name, email, photos } = this.state;
    axios
      .post(`http://18.224.200.47/qa/${question_id}/answers`, {
        body: body,
        name: name,
        email: email,
        photos: photos,
      })
      .then((res) => {
        // console.log(res);
        alert("Thank you for submitting your answer");
      })
      .catch((err) => {
        console.error(err);
      });
    this.props.onHide();
  }

  validateAnswer() {
    const invalid = [];
    if (this.state.body === "") {
      invalid.push("answer");
    }
    if (this.state.name === "") {
      invalid.push("nickname");
    }
    if (this.state.email === "" || !validateEmail(this.state.email)) {
      invalid.push("e-mail");
    }
    if (invalid.length === 0) {
      this.addQuestion();
    } else {
      alert("You must enter the following: " + `${invalid[0]}`);
    }
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Submit your Answer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            {this.props.product_name}: {this.props.question[0]}
          </h5>
          <form>
            <div>
              <div>
                <label for="answer">Your Answer*</label>
                <br />
                <textarea
                  name="body"
                  minLength="10"
                  maxLength="1000"
                  style={{
                    paddingBottom: "100px",
                    whiteSpace: "wrap",
                    width: "85%",
                  }}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <br />
              <div>
                <label for="nickname">What is your nickname*</label>
                <br />
                <input
                  name="name"
                  maxLength="60"
                  placeholder="Example: jack543!"
                  style={{ width: "85%" }}
                  onChange={this.handleChange}
                ></input>
                <br />
                <span className="disclaimer">
                  For privacy reasons, do not use your full name or email
                  address
                </span>
                <br />
                <br />
              </div>
              <div>
                <label for="email">Your email*</label>
                <br />
                <input
                  name="email"
                  maxLength="60"
                  placeholder="Example: jack@email.com"
                  style={{ width: "85%" }}
                  onChange={this.handleChange}
                ></input>
                <br />
                <span className="disclaimer">
                  For authentication reasons, you will not be emailed
                </span>
              </div>
              <br />
              <div>
                {/* <Form>
                    <Form.File
                      id="custom-file"
                      label="Add up to 5 photos to your answer"
                      custom
                    />
                  </Form> */}
              </div>
            </div>
          </form>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button className="mr-auto" onClick={this.validateAnswer}>
            Submit
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AnswerModal;
