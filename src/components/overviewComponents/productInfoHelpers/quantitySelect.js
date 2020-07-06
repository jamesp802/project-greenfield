import React from "react";
import { Form } from "react-bootstrap";

const QuantityDropDown = (props) => {

  const quantity = [];
  //FIXME: render dynamically based upon selected style size stock
  return (
    <div>
      <Form className='quantity-selector-switch'>
        <Form.Group>
          <Form.Control as="select" id="quantity" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default QuantityDropDown;
