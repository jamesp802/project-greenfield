import React from "react";
// import { Carousel } from "react-bootstrap";

const SnapshotGallery = ({ styles, changeHandler }) => {
  //TODO: Add check mark on selection, will likely need to refactor to stateful component, add method to clickhandle and possibly append to style?
  return (
  <div className='snapshot-gallery'>
    {styles.map((style, i) => {
      return (
          <img
            className="snapshots"
            src={style.photos[0].thumbnail_url}
            alt='no photo :('
            id='style'
            value={i}
            key={i}
            onClick={() => changeHandler(i)}
          />
      );
    })}
  </div>
  )
};

export default SnapshotGallery;