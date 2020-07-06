const currentProductStyleList = (
  state = {
    results: [
      {
        skus: {},
        photos: [{ url: "", thumbnail: "" }],
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "PRODUCT_STYLE_LIST":
      return action.styleList;
    default:
      return state;
  }
};

export default currentProductStyleList;
