import React from "react";
import { Form } from "react-bootstrap";


//FIXME:This could be useful to render based on media size
const StyleDropDown = ({ styleList, changeHandler }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control as="select" id="style" onChange={changeHandler}>
            <option value="" disabled selected>
              Style
            </option>
            {styleList.map((style, i) => {
              return (
                <option value={i} key={i}>
                  {style.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default StyleDropDown;
