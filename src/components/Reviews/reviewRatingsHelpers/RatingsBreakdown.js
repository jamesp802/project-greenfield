import React from 'react';
import RatingSummary from './RatingSummary';
import StarBreakdown from './StarBreakdown';
import axios from 'axios';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      numOfRatings: 0,
      currentRating: 0,
    };
    this.getTotalReviews = this.getTotalReviews.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://18.224.200.47/reviews/4/meta')
      .then(({ data }) => {
        console.log('this is starBreakdown data: ', data);
        this.setState(
          {
            ratings: Object.assign({}, this.state.ratings, data.ratings),
          },
          () => {
            console.log('state after object assignment: ', this.state.ratings);
            let totalReviews = this.getTotalReviews();
            console.log('TOTAL REVIEWS', totalReviews);
            this.setState({
              numOfRatings: totalReviews,
            });
          }
        );
      })
      .catch((err) => console.log(err));
  }

  getTotalReviews() {
    if (Object.values(this.state.ratings).length !== 0) {
      return Object.values(this.state.ratings).reduce(
        (acc, currVal) => acc + currVal
      );
    } else {
      return 0;
    }
  }

  /* getRatingsAvg() {
    return Object.keys(this.state.ratings).reduce(
      (acc, currVal) => acc + currVal
    );
  } */

  render() {
    return (
      <div>
        <h6>Ratings & Reviews</h6>
        <RatingSummary
        // ratings={this.state.ratings}
        // numOfRatings={this.state.numOfRatings}
        />
        <br />
        <div>100% of reviews recommend this product</div>
        <br />
        <StarBreakdown
          changeView={this.props.changeView}
          stars={this.props.stars}
          filtered={this.props.filtered}
          ratings={this.state.ratings}
          numOfRatings={this.state.numOfRatings}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default RatingsBreakdown;

/* const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getReviews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingsBreakdown); */
