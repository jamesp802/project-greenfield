import React from "react";
import { Button, Modal } from "react-bootstrap";
import { validateEmail } from "./questionsHelpers";
import axios from "axios";

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: "",
    };
    this.addQuestion = this.addQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateQuestion = this.validateQuestion.bind(this);
  }

  addQuestion() {
    const { body, name, email } = this.state;
    const { product_id } = this.props;
    axios
      .post(`http://18.224.200.47/qa/${product_id}`, {
        body: body,
        name: name,
        email: email,
      })
      .then(() => {
        alert("Thank you for submitting your question!");
      })
      .catch((err) => {
        console.error(err);
      });
    this.props.onHide();
  }

  validateQuestion() {
    const invalid = [];
    if (this.state.body === "") {
      invalid.push("question");
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
            Ask Your Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>About {this.props.product_name}</h5>
          <form>
            <div>
              <div>
                <label for="question">Your question*</label>
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
                  placeholder="Example: jackson11!"
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
                  placeholder="Example: jackson11@email.com"
                  style={{ width: "85%" }}
                  onChange={this.handleChange}
                ></input>
                <br />
                <span className="disclaimer">
                  For authentication reasons, you will not be emailed
                </span>
              </div>
            </div>
          </form>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button className="mr-auto" onClick={this.validateQuestion}>
            Submit
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default QuestionModal;
