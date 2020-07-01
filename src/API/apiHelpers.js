import axios from 'axios';

const searchProductList = () => {
  return axios.get('http://18.224.200.47/product/list');
}

export default searchProductList;