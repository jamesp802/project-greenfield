import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  ChevronCompactDown,
  ChevronCompactUp,
  ArrowsFullscreen
} from "react-bootstrap-icons";

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      extend: 0,
      extendUpClassName: "hidden",
    };
    this.changeDisplayIndex = this.changeDisplayIndex.bind(this);
    this.extendThumbnailsDown = this.extendThumbnailsDown.bind(this);
    this.extendThumbnailsUp = this.extendThumbnailsUp.bind(this);
  }

  changeDisplayIndex(index) {
    this.setState({
      displayIndex: index,
    });
  }

  carouselIndex(direction) {
    let displayIndex = this.state.displayIndex;
    if (direction === "right") {
      if (displayIndex < this.props.photos.length - 1) {
        this.setState({
          displayIndex: (displayIndex += 1),
        });
      } else {
        this.setState({
          displayIndex: 0,
        });
      }
    } else if (direction === "left") {
      if (displayIndex === 0) {
        this.setState({
          displayIndex: this.props.photos.length - 1,
        });
      } else {
        this.setState({
          displayIndex: (displayIndex -= 1),
        });
      }
    }
  }

  extendThumbnailsDown() {
    let extend = this.state.extend + 7;
    this.setState({
      extend: extend,
      extendUpClassName: "extend-up-displayed",
    });
  }

  extendThumbnailsUp() {
    let extend = this.state.extend - 7;
    if (extend === 0) {
      this.setState({
        extendUpClassName: "hidden",
      });
    }

    this.setState({
      extend: extend,
    });
  }

  render() {
    return (
      <div className="photo-gallery">
        <img
          className="photo-gallery-display-image"
          src={this.props.photos[this.state.displayIndex].url}
        />
        <ArrowRight
          className="right-chevron"
          onClick={() => {
            this.carouselIndex("right");
          }}
        />
        <ArrowLeft
          className="left-chevron"
          onClick={() => {
            this.carouselIndex("left");
          }}
        />
        <ArrowsFullscreen className={`fullscreen-button`} onClick={this.props.changeDisplay}/>
        <ul className="thumbnail-gallery-container">
          <li>
            <ChevronCompactUp
              className={this.state.extendUpClassName}
              onClick={this.extendThumbnailsUp}
            />
          </li>
          {this.props.photos
            .slice(this.state.extend, this.state.extend + 8)
            .map((photo, i) => {
              if (i < 7) {
                if (this.state.displayIndex === i) {
                  return (
                    <li key={i}>
                      <img
                        onClick={() => this.changeDisplayIndex(i)}
                        className={"thumbnail-gallery-item selected"}
                        src={photo.url}
                      />
                    </li>
                  );
                } else if (this.state.displayIndex !== i) {
                  return (
                    <li key={i}>
                      <img
                        onClick={() => this.changeDisplayIndex(i)}
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
                      onClick={this.extendThumbnailsDown}
                    />
                  </li>
                );
              }
            })}
        </ul>
      </div>
    );
  }
}

export default PhotoGallery;
