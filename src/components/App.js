import React from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from './Home';
// import Product from './Product';
// import Questions from './questions/Questions';
import ProductInfo from './overviewComponents/productInfo';
// import RatingsAndReviews from './Reviews/RatingsAndReviews';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ProductInfo />
          </Route>
          <Route path="/">
            <h1>Navigate to /product/:id</h1>
            ex. localhost:3000/product/5
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*

All routes will be added to this router/switch statement

TODO:
'/product/:id' will have to trigger a request to get product info and update state accordingly, thus rendering the new page with the new info

*/
