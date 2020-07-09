const metaData = (state = {}, action) => {
  switch (action.type) {
    case "META DATA":
      if (state[action.metaData] === undefined) {
        return {
          ...state,
          [action.metaData]: { clicks: 1, lastClick: new Date() },
        };
      } else {
        let clicks = (state[action.metaData].clicks + 1);
        return {
          ...state,
          [action.metaData]: {clicks: clicks, lastClick: new Date() },
        };
      }
    default:
      return state;
  }
};

export default metaData;
