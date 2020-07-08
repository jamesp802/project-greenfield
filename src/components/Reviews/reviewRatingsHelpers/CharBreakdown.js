import React from 'react';
import { CaretDownFill } from 'react-bootstrap-icons';
import '../reviewsStyle.css';

const CharBreakdown = (props) => {
  return (
    <div className="rating-bar-container" style={{ width: '100px' }}>
      <div
        className="rating-bar-filler"
        style={{ position: 'relative', width: '100%', background: 'grey' }}
      >
        <div style={{ position: 'absolute', right: '50%' }}>
          <CaretDownFill />
        </div>
      </div>
    </div>
  );
};

export default CharBreakdown;

{
  /* <div className="char-bar-container">
      <label className="char-bar-label">Quality</label>
      <div
        className="char-bar-filler"
        style={{ width: `50%`, backgroundColor: 'grey' }}
      >
        <span className="char-bar-icon">
          <CaretDownFill style={{ float: 'right' }} />
        </span>
      </div>
      <label className="char-bar-label-left">low</label>
      <label className="char-bar-label-right">high</label>
    </div> */
}
