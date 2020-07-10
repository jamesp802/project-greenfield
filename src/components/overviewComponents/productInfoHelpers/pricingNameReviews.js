import React from "react";

import SnapshotGallery from "./snapshotGallery";
import Ratings from "react-ratings-declarative";

const PricingNameReviews = ({
  productInfo,
  productStyle,
  styles,
  changeHandler,
  styleIndex,
  rating,
}) => {
  let price =
    styleIndex === 0 ? productInfo.default_price : productStyle.original_price;
  let sale = false;

  if (productStyle.sale_price && productStyle.sale_price > 0) {
    price = productStyle.sale_price;
    sale = true;
  }
  return (
    <>
      <div className="overview-stars">
        <Ratings rating={rating} widgetRatedColors="black">
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
        </Ratings>
        {"  "}
        <a
          className="review-anchor-link"
          style={{ color: "blue", textDecorationLine: "underline" }}
          onClick={() => {
            document.getElementById("anchor").scrollIntoView();
          }}
        >
          Read All Reviews
        </a>
      </div>
      {productInfo.category}
      <h1>{productInfo.name}</h1>
      <p style={sale ? { color: "red" } : null}>${price}</p>
      <b>Style ></b> {productStyle.name ? productStyle.name : styles[0].name}
      <SnapshotGallery
        styles={styles}
        changeHandler={changeHandler}
        styleIndex={styleIndex}
      />
    </>
  );
};

export default PricingNameReviews;
