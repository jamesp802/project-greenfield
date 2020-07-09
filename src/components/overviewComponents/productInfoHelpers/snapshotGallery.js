import React from "react";
// import { Carousel } from "react-bootstrap";

const SnapshotGallery = ({ styles, changeHandler, styleIndex }) => {
  console.log(styleIndex)
  return (
    <div className="snapshot-gallery" id='style-selector-click'>
      {styles.map((style, i) => {
        if (i === styleIndex) {
          return (
            <div style={{display: 'inline-block', position: 'relative'}}>
              <img
                className='snapshots'
                src={style.photos[0].thumbnail_url}
                alt="no photo :("
                id="style"
                value={i}
                key={i}
                onClick={() => changeHandler(i)}
              />
              <li className="selected-style-indicator"/>
            </div>
          );
        } else {
          return (
            <img
              className="snapshots"
              src={style.photos[0].thumbnail_url}
              alt="no photo :("
              id="style"
              value={i}
              key={i}
              onClick={() => changeHandler(i)}
            />
          );
        }
      })}
    </div>
  );
};

export default SnapshotGallery;
