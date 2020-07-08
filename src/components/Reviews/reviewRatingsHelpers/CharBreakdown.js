import React from 'react';
import { CaretDownFill } from 'react-bootstrap-icons';
import '../reviewsStyle.css';

const CharBreakdown = (props) => {
  return (
    <div
      className="rating-bar-container"
      style={{ /* width: '100%', height: '10px', */ background: 'lightgrey' }}
    >
      <div
        className="rating-bar-filler"
        style={{
          position: 'relative',
          height: '10px',
          width: '100%',
          background: 'red',
        }}
      >
        <span style={{ position: 'absolute', right: '50%' }}>
          <CaretDownFill />
        </span>
      </div>
    </div>
  );
};

export default CharBreakdown;
{
  /*  <div>
        <label className="char-bar-label-left">low</label>
        <label className="char-bar-label-right">high</label>
      </div> */
}

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
