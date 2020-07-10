import axios from 'axios';

export const reviewAction = (reviews) => ({
  type: 'GET_REVIEWS',
  reviews,
});

export const getReviews = (url) => (dispatch) => {
  axios
    .get(url)
    .then(({ data }) => {
      dispatch(reviewAction(data));
    })
    .catch((err) => console.log(err));
};
