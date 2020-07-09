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
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
          <Ratings.Widget widgetDimension="12px" widgetSpacing="0px" />
        </Ratings>
        {"  "}
        <a className='review-anchor-link' style={{color: 'blue', textDecorationLine: 'underline'}}onClick={() => {document.getElementById('anchor').scrollIntoView()}}>Read All Reviews</a>
      </div>
      <br />
      {productInfo.category}
      <br />
      <h1>{productInfo.name}</h1>${styleIndex === 0 ? productInfo.default_price : productStyle.original_price}
      <br />
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
