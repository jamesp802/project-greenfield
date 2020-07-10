import React from 'react';
import Stars from './Stars';

const RatingSummary = (props) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <span style={{ fontSize: 45, display: 'inline-block' }}>
          {props.avgRatings.toFixed(1)}{' '}
        </span>{' '}
        <span style={{ display: 'inline-block', position: 'top' }}>
          <Stars ratings={props.avgRatings} />
        </span>
      </div>
    </div>
  );
};

export default RatingSummary;
