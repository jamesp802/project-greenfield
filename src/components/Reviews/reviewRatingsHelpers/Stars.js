import React from 'react';
import Ratings from 'react-ratings-declarative';

const Stars = (props) => {
  return (
    <Ratings rating={props.ratings} widgetRatedColors="black">
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
    </Ratings>
  );
};

export default Stars;
