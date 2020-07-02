import React from 'react';
import { connect } from 'react-redux';

const ReviewTile = (props) => {
  return (
    <div>
      {this.props.data.results.map((review) => {
        return (
          <React.Fragment>
            <h1 className="reviewTitle">{review.summary}</h1>
            <span>{review.rating}</span>
            <span>{review.date}</span>
            <br />
            <p>{review.body}</p>
            <br />
            <p>this is the footer </p>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ReviewTile;
