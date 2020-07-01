const counts = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      let count = state;
      count++;
      return count;
    default:
      return state
  }
}

export default counts