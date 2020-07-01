import React from "react";
import {
  fetchProductInfoAction,
  fetchProductStyleListAction,
} from "../../actions/overviewActions/productInfoActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
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
    console.log(this.state);
    return (
      <div>
        <h1>Product Info</h1>
        <li>category: {productInfo.category}</li>
        <li>name: {productInfo.name}</li>
        <li>price: ${productInfo.default_price}</li>
        <li>
          overview:
          <br />
          description: {productInfo.description}
          <br />
          slogan: {productInfo.slogan}
          <br />
          features: {JSON.stringify(productInfo.features)}
        </li>
        styles:
        <select onChange={this.handleChange}>
          {this.props.productStyleList.results.map((style, index) => {
            return <option key={index} value={index}>{style.name}</option>
          })}
        </select>

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
