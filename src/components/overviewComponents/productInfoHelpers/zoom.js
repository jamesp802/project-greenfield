import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "../../../styles.css";

class Zoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: false,
      mouseX: null,
      mouseY: null,
    };

    let { height, img, transitionTime, width } = props;

    this.outerDivStyle = {
      width: `${width}px`,
      overflow: "hidden",
    };

    this.innerDivStyle = {
      height: `${height}px`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      transition: `transform ${transitionTime}s ease-out`,
    };

    this.imageRef = createRef();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
  }

  handleMouseOver() {
    this.setState({
      zoom: true,
    });
  }

  handleMouseOut() {
    this.setState({
      zoom: false,
    });
  }

  handleMouseMovement(e) {
    const {
      left: offsetLeft,
      top: offsetTop,
    } = this.imageRef.current.getBoundingClientRect();

    const {
      current: {
        style: { height, width },
      },
    } = this.imageRef;

    const x = ((e.pageX - offsetLeft) / parseInt(width, 10)) * 100;
    const y = ((e.pageY - offsetTop) / parseInt(height, 10)) * 100;

    this.setState({
      mouseX: x,
      mouseY: y,
    });
  }

  render() {
    const { mouseX, mouseY, zoom } = this.state;

    const { zoomScale } = this.props;

    const transform = {
      transformOrigin: `${mouseX}% ${mouseY}%`,
    };

    return (
      <div
        style={{ ...this.outerDivStyle, height: `350px` }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onMouseMove={this.handleMouseMovement}
        ref={this.imageRef}
        className={this.props.hidden ? "photo-gallery-display-image zoomPointer" : 'hidden'}
        onClick={() => this.props.changeDisplay('isZoomed')}
      >
        <div
          style={{
            ...transform,
            ...this.innerDivStyle,
            transform: zoom ? `scale(${zoomScale})` : "scale(1.0)",
            backgroundImage: `url(${this.props.img})`,
            cursor: 'zoom-out'
          }}
          className={styles.zoomImg}
        />
      </div>
    );
  }
}

export default Zoom;
