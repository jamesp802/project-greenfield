import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../reviewsStyle.css';

const StarBreakdown = (props) => {
  return (
    <>
      <div className="starBarContainer">
        {[5, 4, 3, 2, 1].map((star, i) => {
          let amount = props.ratings[star] || 0;
          let totalReviews = props.numOfRatings || 0;
          let percentage = (amount / totalReviews) * 100;
          return (
            <React.Fragment key={i}>
              <span
                className="progress-label-left"
                onClick={(e) => props.handleClick(e)}
              >
                {star} stars
              </span>
              <span className="progress-label-right">{amount}</span>
              <ProgressBar now={percentage} variant="success" />
              <br />
            </React.Fragment>
          );
        })}
      </div>
      {props.filtered ? (
        <>
          <p>
            Current filters applied:{' '}
            {props.stars.map((star, i) => (
              <span key={i}>"{star} stars", </span>
            ))}
          </p>
          <p className="remove-filter" onClick={props.changeView}>
            Remove All Filters
          </p>
        </>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default StarBreakdown;
