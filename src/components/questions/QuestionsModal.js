import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const QuestionsModal = (props) => {
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
      <Modal.Body
            // style={{
            //   maxHeight: 'calc(100vh - 210px)',
            //   overflowY: 'auto',
            // }}
          >
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div>
                <div>
                  <p>Your question* </p>
                  <textarea
                    maxLength="1000"
                    minLength="10"
                    // rows="5"
                    // cols="50"
                  ></textarea>
                </div>
                <br />
                <div>
                  <p>What is your nickname*:</p>
                  <textarea
                    maxLength="60"
                    placeholder="Example: jackson11!"
                  ></textarea>
                  <span>
                    For privacy reasons, do not use your full name or email
                    address
                  </span>
                </div>
                {/* email */}
                <div>
                  <p>Your email*</p>
                  <textarea
                    maxLength="60"
                    placeholder="Example: jackson11@email.com"
                  ></textarea>
                  <span>
                    For authentication reasons, you will not be emailed
                  </span>
                </div>
              </div>
            </form>
            <br />
          </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuestionsModal;

// style={{ display: 'block', fontSize: '12px' }}