import React from 'react';
import { CaretDownFill } from 'react-bootstrap-icons';
import '../reviewsStyle.css';

export const filterLow = (name) => {
  if (name === 'Fit') {
    return 'Runs tight';
  } else if (name === 'Size') {
    return 'A size too small';
  } else if (name === 'Width') {
    return 'Too narrow';
  } else if (name === 'Comfort') {
    return 'Uncomfortable';
  } else if (name === 'Quality') {
    return 'Poor';
  } else if (name === 'Length') {
    return 'Runs Short';
  }
};

export const filterHigh = (name) => {
  if (name === 'Fit') {
    return 'Runs long';
  } else if (name === 'Size') {
    return 'A size too wide';
  } else if (name === 'Width') {
    return 'Too wide';
  } else if (name === 'Comfort') {
    return 'Perfect';
  } else if (name === 'Quality') {
    return 'Perfect';
  } else if (name === 'Length') {
    return 'Runs long';
  }
};

export const CharBreakdown = (props) => {
  return (
    <div className="char-bar-container">
      {props.characteristics.map((char, i) => (
        <React.Fragment key={i}>
          <label
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            {char[0]}
          </label>
          <div style={{ backgroundColor: 'lightgrey' }}>
            <div
              className="char-bar-filler"
              style={{
                height: '10px',
                width: `${(char[1].value / 5) * 100}%`,
              }}
            >
              <CaretDownFill style={{ float: 'right' }} />
            </div>
          </div>
          <label style={{ float: 'left' }}>{filterLow(char[0])}</label>
          <label style={{ float: 'right' }}>{filterHigh(char[0])}</label>
          {char[0] !== 'Comfort' && char[0] !== 'Quality' ? (
            <label
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Perfect
            </label>
          ) : null}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};
