import React from 'react';
import Ratings from 'react-ratings-declarative';

const Stars = (props) => {
  return (
    <Ratings rating={props.ratings} widgetRatedColors="black">
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
};

export default Stars;
