import React from "react";
import { Form } from "react-bootstrap";

const QuantityDropDown = ({ skus, size }) => {
  let quantity = [];
  for (let i = 1; i <= skus[size]; i++) {
    if (i >= 15) {
      break;
    }
    quantity.push(i);
  }
  return (
    <div id='quantity-selector-click'>
      <Form className="quantity-selector-switch">
        <Form.Group>
          <Form.Control as="select" id="quantity">
            {size ? null : <option selected disabled>Quantity</option>}
            {quantity.map((val) => {
              return <option>{val}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default QuantityDropDown;
