
import React from "react";
import {
  fetchProductInfoAction,
  fetchProductStyleListAction,
  metaDataAction,
} from "../../actions/overviewActions/productInfoActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Navbar, Container, Form, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import PhotoGallery from "./productInfoHelpers/photoGallery";
import Description from "./productInfoHelpers/productDescription";
import Selectors from "./productInfoHelpers/selectors";
import PricingNameReviews from "./productInfoHelpers/pricingNameReviews";
import QuestionsWidget from "../questions/Questions";
import ReviewsWidget from "../Reviews/RatingsAndReviews";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      styleIndex: 0,
      size: null,
      quantity: 1,
      fullscreen: false,
      isZoomed: false,
      warningSelectSize: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.photoDisplayRender = this.photoDisplayRender.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.submitCart = this.submitCart.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchProductInfo(id);
    this.props.fetchProductStyleList(id);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  changeStyle(index) {
    this.setState({
      style: this.props.productStyleList.results[index],
      styleIndex: index,
    });
  }

  changeDisplay(fullscreenOrZoomKey) {
    let bool = !this.state[fullscreenOrZoomKey];
    this.setState({
      [fullscreenOrZoomKey]: bool,
    });
  }

  submitCart() {
    if (this.state.size === null) {
      this.setState({
        warningSelectSize: true,
      });
    } else {
      this.setState({
        warningSelectSize: false,
      });
    }
    //FIXME: post size, quantity and tokens to API
  }

  photoDisplayRender() {
    let defaultStyle = this.props.productStyleList.results[0];
    let selectedStyle = this.state.style;

    if (this.state.fullscreen === false) {
      return (
        <div className="default-carousel">
          <PhotoGallery
            photos={
              selectedStyle.photos ? selectedStyle.photos : defaultStyle.photos
            }
            changeDisplay={this.changeDisplay}
          />
        </div>
      );
    } else {
      return (
        <div className="fullscreen-carousel">
          <PhotoGallery
            photos={
              selectedStyle.photos ? selectedStyle.photos : defaultStyle.photos
            }
            changeDisplay={this.changeDisplay}
            fullscreen={true}
            isZoomed={this.state.isZoomed}
          />
        </div>
      );
    }
  }

  render() {
    const { productInfo } = this.props;
    const { productStyleList } = this.props;

    let defaultStyle = productStyleList.results[0];
    let selectedStyle = this.state.style;

    return (
      <>
        <div
          className="container"
          onClick={(e) => {
            if (e.target.id) {
              console.log(this.props.metaData)
              return this.props.metaDataAction(e.target.id);
            }
          }}
        >
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="#">PulsarShop</Navbar.Brand>
              <Form inline>
                <FormControl type="text" placeholder="Search" size="sm" />
                <Button variant="outline-secondary" className="btn-sm">
                  <Search />
                </Button>
              </Form>
            </Container>
          </Navbar>
          <div className="overview">
            {this.photoDisplayRender()}
            <div
              className={`product-info ${
                this.state.fullscreen ? "hidden" : ""
              }`}
            >
              <PricingNameReviews
                productStyle={
                  this.state.style
                    ? this.state.style
                    : currentProductStyleList.results[0]
                }
                productInfo={productInfo}
                styles={productStyleList.results}
                changeHandler={this.changeStyle}
                styleIndex={this.state.styleIndex}
                rating={3}
              />
              <div className="product-ui">
                <Selectors
                  style={
                    this.state.selected
                      ? this.state.style
                      : productStyleList.results[0]
                  }
                  changeHandler={this.changeHandler}
                  size={this.state.size}
                  submitCart={this.submitCart}
                  warningSelectSize={this.state.warningSelectSize}
                />
              </div>
            </div>
          </div>
          <Description
            features={productInfo.features}
            description={productInfo.description}
            slogan={productInfo.slogan}
          />
        </div>
        <QuestionsWidget
          productId={this.props.match.params.id}
          name={productInfo.name ? productInfo.name : 'i DiDNt Get My ProPs'}
        />
        <ReviewsWidget
          productId={this.props.match.params.id}
          name={productInfo.name}
        />
      </>
    );
  }
}

// CONTAINER //////////////////////////////

const mapStateToProps = (state) => {
  return {
    productInfo: state.currentProductInfo,
    productStyleList: state.currentProductStyleList,
    rating: state.reviews,
    metaData: state.metaData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductInfo: (id) => dispatch(fetchProductInfoAction(id)),
    fetchProductStyleList: (id) => dispatch(fetchProductStyleListAction(id)),
    metaDataAction: (elementId) => dispatch(metaDataAction(elementId)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
);
