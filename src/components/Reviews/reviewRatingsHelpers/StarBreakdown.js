import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CaretDownFill } from 'react-bootstrap-icons';
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
              <span className="progress-label-left">{star} stars</span>
              <span className="progress-label-right">{amount}</span>
              <ProgressBar now={percentage} variant="success" />
              <br />
            </React.Fragment>
          );
        })}
      </div>
      <br />
      <div className="charBar">
        <ProgressBar>
          <ProgressBar now={35} />
          <CaretDownFill />
        </ProgressBar>
      </div>
    </>
  );
};

export default StarBreakdown;
