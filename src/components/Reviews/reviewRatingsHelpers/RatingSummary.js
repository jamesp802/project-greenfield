import React from 'react';
import Stars from './Stars';

const RatingSummary = (props) => {
  return (
    <div>
      <div>
        <span style={{ fontSize: 35, display: 'inline-block' }}>
          {props.avgRatings.toFixed(1)}{' '}
        </span>{' '}
        <span style={{ display: 'inline-block' }}>
          <Stars ratings={props.avgRatings} />
        </span>
      </div>
    </div>
  );
};

export default RatingSummary;
