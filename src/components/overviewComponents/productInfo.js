import React from "react";
import {
  fetchProductInfoAction,
  fetchProductStyleListAction,
} from "../../actions/overviewActions/productInfoActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DropdownButton, Button, ButtonGroup, Dropdown } from "react-bootstrap";

import SizeDropDown from "./productInfoHelpers/sizeDropDown";
import StyleDropDown from "./productInfoHelpers/styleDropDown";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      size: null,
      quantity: 1,
      selected: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  changeStyle(e) {
    this.setState({
      style: this.props.productStyleList.results[e.target.value]
    })
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchProductInfo(id);
    this.props.fetchProductStyleList(id);
  }

  render() {
    const { productInfo } = this.props;
    const { productStyleList } = this.props;

    let defaultStyle = productStyleList.results[0];
    let selectedStyle = this.state.style;

    console.log(this.state);
    return (
      <div className="overview container">
        <div className="product-info">
          {/* stars */}
          {productInfo.category}
          <h1>{productInfo.name}</h1>${selectedStyle.original_price ? selectedStyle.original_price : defaultStyle.original_price}
        </div>
        <div className="product-ui">
          <b>style ></b> {this.state.style.name ? this.state.style.name : productStyleList.results[0].name}
          {/* style snapshot component */}
          <br />
          <StyleDropDown
            styleList={productStyleList.results}
            changeHandler={this.changeStyle}
          />
          <SizeDropDown
            style={
              this.state.selected
                ? this.state.style
                : productStyleList.results[0]
            }
            changeHandler={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

// CONTAINER //////////////////////////////

const mapStateToProps = (state) => {
  return {
    productInfo: state.currentProductInfo,
    productStyleList: state.currentProductStyleList,
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
//           thumbnail_url:
//             "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//           url:
//             "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         },
//       ],
//       skus: { XS: 2, S: 0, M: 27, L: 41, XL: 16, XXL: 35 },
//     },
// };
