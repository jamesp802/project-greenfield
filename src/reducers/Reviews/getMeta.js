export const metaReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_META':
      console.log('reducer state merge meta: ', {
        ...state,
        reviewMeta: action.metaInfo,
      });
      return { ...state, reviewMeta: action.metaInfo };
    default:
      return state;
  }
};
