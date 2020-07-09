import React from "react";

import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";

const Thumbnails = (props) => {
  const {
    photos,
    fullscreen,
    extend,
    displayIndex,
    changeDisplayIndex,
    extendUpClassName,
    extendThumbnailsDown,
    extendThumbnailsUp,
  } = props;

  if (fullscreen === true) {
    return (
      <div className="fullscreen-thumbnails">
        {photos.map((photo, i) => {
          if (i === displayIndex) {
            return (
              <img src={photo.url} className="fullscreen-selected-thumbnail" />
            );
          } else {
            return (
              <img
                src={photo.url}
                className="fullscreen-nonselected-thumbnail"
                onClick={() => changeDisplayIndex(i)}
              />
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="thumbnail-gallery-container">
        <li>
          <ChevronCompactUp
            className={extendUpClassName}
            onClick={extendThumbnailsUp}
          />
        </li>
        {photos.slice(extend, extend + 8).map((photo, i) => {
          if (i < 7) {
            if (displayIndex === i) {
              return (
                <li key={i}>
                  <img
                    onClick={() => changeDisplayIndex(i)}
                    className={"thumbnail-gallery-item selected"}
                    src={photo.url}
                  />
                </li>
              );
            } else if (displayIndex !== i) {
              return (
                <li key={i}>
                  <img
                    onClick={() => changeDisplayIndex(i)}
                    className={"thumbnail-gallery-item"}
                    src={photo.url}
                  />
                </li>
              );
            }
          } else if (i === 7) {
            return (
              <li key={i}>
                <ChevronCompactDown
                  className="down-chevron"
                  onClick={extendThumbnailsDown}
                />
              </li>
            );
          }
        })}
      </div>
    );
  }
};

export default Thumbnails;
