import React from 'react';
import { connect } from 'react-redux';

const SortingView = (props) => {
  return (
    <h6 className="sorting">
      {props.reviews.length} reviews, sorted by:
      <select>
        {['relevance', 'helpful', 'newest'].map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </h6>
  );
};

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

export default connect(mapStateToProps, null)(SortingView);
