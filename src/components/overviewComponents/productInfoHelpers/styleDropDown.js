import React from "react";
import { Form } from "react-bootstrap";

const StyleDropDown = ({ styleList, changeHandler }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Style</Form.Label>
          <Form.Control as="select" id='style' onChange={changeHandler}>
            {styleList.map((style, i) => {
                return <option value={i} key={i}>{style.name}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};


export default StyleDropDown;