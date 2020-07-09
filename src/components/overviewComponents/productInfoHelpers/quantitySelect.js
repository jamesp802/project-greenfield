import React from "react";
import { Form } from "react-bootstrap";

const QuantityDropDown = ({ skus, size }) => {
  // {XS: 8, S: 16, M: 17, L: 10, XL: 15, …}
  let quantity = [];
  for (let i = 1; i <= skus[size]; i++) {
    if (i >= 15) {
      break;
    }
    quantity.push(i);
  }
  return (
    <div>
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
