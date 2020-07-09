import React from "react";

import SizeDropDown from "./sizeDropDown";
import QuantityDropDown from "./quantitySelect";
import { Button } from "react-bootstrap";
import {
  CartPlus,
  Heart
} from "react-bootstrap-icons";

const Selectors = ({
  style,
  size,
  changeHandler,
  submitCart,
  warningSelectSize,
}) => {
  return (
    <>
      {warningSelectSize ? <span className='warning-select-size'>Please Select a Size</span> : null}
      <SizeDropDown
        variant="outline-secondary"
        style={style}
        changeHandler={changeHandler}
        sizeSelected={size}
      />
      <QuantityDropDown skus={style.skus} size={size} />
      <Button variant="outline-secondary" className="addToCart" onClick={submitCart} id='cart-click'>
        Add to Bag
        <CartPlus style={{float: 'right', paddingTop: '4px'}}/>
      </Button>
      <Button variant="outline-secondary" className="favorite-button"           id='favorite-click'>
        <Heart/>
      </Button>
    </>
  );
};

export default Selectors;
