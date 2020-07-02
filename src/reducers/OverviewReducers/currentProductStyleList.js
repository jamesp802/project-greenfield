const currentProductStyleList = (state = {
  results: [
    {
      skus: {}
    }
  ],
}, action) => {
  switch (action.type) {
    case "PRODUCT_STYLE_LIST":
      return action.styleList;
    default:
      return state;
  }
};

export default currentProductStyleList;
