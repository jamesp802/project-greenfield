import axios from 'axios';

export const increaseCount = (value) => ({
  type: "INCREASE_COUNT",
  value: value,
});

export const getData = (data) => ({
  type: "GET_DATA",
  data: data,
});

export const getPosts = () => (dispatch) => {
  axios
    .get('http://18.224.200.47/products/list')
    .then(({ data }) => {
      console.log(data);
      dispatch(getData(data));
    })
    .catch((err) => console.log(err));
};