import React from 'react';
import Ratings from 'react-ratings-declarative';

const Stars = (props) => {
  return (
    <Ratings rating={props.ratings} widgetRatedColors="black">
<<<<<<< HEAD
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
=======
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
      <Ratings.Widget widgetDimension="15px" />
>>>>>>> c60c39fe9c81bf49efd6b02c862afa03e51635b2
    </Ratings>
  );
};

export default Stars;
