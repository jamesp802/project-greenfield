import React from "react";
import { Button, Modal } from "react-bootstrap";

const QuestionsModal = (props) => {
  console.log(props)
  return (
    <Modal
      {...props}
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
      <h5>About [Product Name]</h5>
        <form>
          <label>
            <div>
              <div>
                <p>Your question* </p>
                <textarea
                  minLength="10"
                  maxLength="1000"
                  style={{
                    paddingBottom: "100px",
                    whiteSpace: "wrap",
                    width: "85%",
                  }}
                ></textarea>
              </div>
              <br />
              <div>
                <p>What is your nickname*:</p>
                <input
                  maxLength="60"
                  placeholder="Example: jackson11!"
                  style={{ width: "85%" }}
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
                <p>Your email*</p>
                <input
                  maxLength="60"
                  placeholder="Example: jackson11@email.com"
                  style={{ width: "85%" }}
                ></input>
                <br />
                <span className="disclaimer">
                  For authentication reasons, you will not be emailed
                </span>
              </div>
            </div>
          </label>
        </form>
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button className="mr-auto" onClick={props.addQuestion}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionsModal;
