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
          if (i === displayIndex && photo.thumbnail_url) {
            return (
              <img
                src={photo.thumbnail_url}
                id="photo-click"
                className="fullscreen-selected-thumbnail"
              />
            );
          } else if (photo.thumbnail_url) {
            return (
              <img
                src={photo.thumbnail_url}
                className="fullscreen-nonselected-thumbnail"
                onClick={() => changeDisplayIndex(i)}
                id="photo-click"
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
          console.log(photo, i);
          if (i < 7) {
            if (displayIndex === i && photo.thumbnail_url) {
              return (
                <li key={i}>
                  <img
                    onClick={() => changeDisplayIndex(i + extend)}
                    className={"thumbnail-gallery-item selected"}
                    src={photo.thumbnail_url}
                  />
                </li>
              );
            } else if (displayIndex !== i && photo.thumbnail_url) {
              return (
                <li key={i}>
                  <img
                    onClick={() => changeDisplayIndex(i + extend)}
                    className={"thumbnail-gallery-item"}
                    src={photo.thumbnail_url}
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
