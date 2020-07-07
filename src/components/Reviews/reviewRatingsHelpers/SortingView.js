import React from 'react';
import { connect } from 'react-redux';

const SortingView = (props) => {
  return (
    <div>
      {props.reviews.length} reviews, sorted by:
      <select>
        {['Relevance', 'Helpful', 'Newest'].map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

export default connect(mapStateToProps, null)(SortingView);
