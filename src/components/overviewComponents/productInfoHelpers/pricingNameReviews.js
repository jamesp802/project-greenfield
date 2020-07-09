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
  return (
    <>
      <div className="overview-stars">
        <Ratings rating={rating} widgetRatedColors="black">
          <Ratings.Widget widgetDimension="10px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="10px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="10px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="10px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="10px" widgetSpacing="0px" />
        </Ratings>
        {"  "}
        <a href='#anchor' style={{paddingLeft: '5px', paddingTop: '2px'}}>reviews</a>
      </div>
      <br />
      {productInfo.category}
      <br />
      <h1>{productInfo.name}</h1>${productStyle.original_price}
      <br />
      <br />
      <b>style ></b> {productStyle.name ? productStyle.name : styles[0].name}
      <SnapshotGallery
        styles={styles}
        changeHandler={changeHandler}
        styleIndex={styleIndex}
      />
    </>
  );
};

export default PricingNameReviews;
