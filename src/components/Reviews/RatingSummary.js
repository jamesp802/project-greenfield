import React from 'react';
import Stars from './Stars';

const RatingSummary = (props) => {
  return (
    <div>
      <div>
        <span style={{ fontSize: 35, display: 'inline-block' }}>3.5 </span>{' '}
        <span style={{ display: 'inline-block' }}>
          <Stars ratings={2.5} />
        </span>
      </div>
    </div>
  );
};

export default RatingSummary;
