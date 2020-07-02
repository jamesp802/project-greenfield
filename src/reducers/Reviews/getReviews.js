const initialState = {
  reviewsData: [],
  review: {},
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      console.log('reducer state merge: ', {
        ...state,
        reviewsData: action.reviews.results,
      });
      return { ...state, reviewsData: action.reviews.results };
    default:
      return state;
  }
};

export default reviewReducer;
