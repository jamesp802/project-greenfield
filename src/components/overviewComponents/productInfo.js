import React from "react";
import {
  fetchProductInfoAction,
  fetchProductStyleListAction,
} from "../../actions/overviewActions/productInfoActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  DropdownButton,
  Button,
  ButtonGroup,
  Dropdown,
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

import {
  Search
} from "react-bootstrap-icons";

import SizeDropDown from "./productInfoHelpers/sizeDropDown";
import QuantityDropDown from "./productInfoHelpers/quantitySelect";
import SnapshotGallery from "./productInfoHelpers/snapshotGallery";
import PhotoGallery from "./productInfoHelpers/photoGallery";
import Description from "./productInfoHelpers/productDescription";

import Selectors from "./productInfoHelpers/selectors";
import PricingNameReviews from "./productInfoHelpers/pricingNameReviews";

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
      <div className="container">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">PulsarShop</Navbar.Brand>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                size='sm'
              />
              <Button variant="outline-secondary" className='btn-sm'>
                <Search />
              </Button>
            </Form>
          </Container>
        </Navbar>
        <div className="overview container">
          {this.photoDisplayRender()}
          <div
            className={`product-info ${this.state.fullscreen ? "hidden" : ""}`}
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
    );
  }
}

// CONTAINER //////////////////////////////

const mapStateToProps = (state) => {
  return {
    productInfo: state.currentProductInfo,
    productStyleList: state.currentProductStyleList,
    rating: state.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductInfo: (id) => dispatch(fetchProductInfoAction(id)),
    fetchProductStyleList: (id) => dispatch(fetchProductStyleListAction(id)),
  };
};
// export default connect(null, null)(ProductInfo);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
);

// const EXAMPLEDATA = {
//   id: 123,
//   name: "Gabe Slacks",
//   slogan: "Sint est omnis recusandae rerum sunt qui.",
//   description:
//     "Nobis dolore dolor earum velit animi. Inventore voluptatem aspernatur maxime aperiam. Dolor voluptas voluptates animi et. Id saepe eveniet voluptatibus minus incidunt.",
//   category: "Slacks",
//   default_price: "868",
//   features: [{ feature: "Sustainably Sourced", value: "null" }],
// };

// const styleData = {
//   product_id: "123",
//   results: [
//     {
//       style_id: 536,
//       name: "Pink",
//       original_price: "868",
//       sale_price: "0",
//       "default?": 1,
//       photos: [
//         {
//           thumbnail_url:
//             "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//           url:
//             "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
//         },
//         {
//
//           url:
//             "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         },
//       ],
//       skus: { XS: 2, S: 0, M: 27, L: 41, XL: 16, XXL: 35 },
//     },
// };
