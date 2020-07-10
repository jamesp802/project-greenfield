import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  ChevronCompactDown,
  ChevronCompactUp,
  ArrowsFullscreen,
} from "react-bootstrap-icons";
import Zoom from "./zoom";
import Thumbnails from "./thumbnails";

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      extend: 0,
      extendUpClassName: "hidden",
      zoomView: false,
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
          className={
            this.props.isZoomed ? "hidden" : "photo-gallery-display-image"
          }
          onClick={
            this.props.fullscreen
              ? () => this.props.changeDisplay("isZoomed")
              : () => this.props.changeDisplay("fullscreen")
          }
          src={this.props.photos[this.state.displayIndex].url}
        />
        <Zoom
          img={this.props.photos[this.state.displayIndex].url}
          zoomScale={3}
          height={500}
          width={1110}
          hidden={this.props.isZoomed}
          fullscreen={this.props.fullscreen}
          changeDisplay={this.props.changeDisplay}
        />
        <ArrowRight
          className="right-chevron"
          onClick={() => {
            this.carouselIndex("right");
          }}
          id='photo-click'
        />
        <ArrowLeft
          className="left-chevron"
          style={this.props.fullscreen ? {left: '10px'} : {}}
          onClick={() => {
            this.carouselIndex("left");
          }}
          id='photo-click'
        />
        <ArrowsFullscreen
          className={this.props.fullscreen ? 'fullscreen-button' : 'hidden'}
          onClick={() => this.props.changeDisplay("fullscreen")}
        />
        <Thumbnails
            photos={this.props.photos}
            fullscreen={this.props.fullscreen}
            extend={this.state.extend}
            displayIndex={this.state.displayIndex}
            changeDisplayIndex={this.changeDisplayIndex}
            extendUpClassName={this.state.extendUpClassName}
            extendThumbnailsDown={this.extendThumbnailsDown}
            extendThumbnailsUp={this.extendThumbnailsUp}
        />
      </div>
    );
  }
}

export default PhotoGallery;
