import React from 'react';
import RatingSummary from './RatingSummary';
import StarBreakdown from './StarBreakdown';
import { CharBreakdown } from './CharBreakdown';
import axios from 'axios';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      numOfRatings: 0,
      currentRating: 0,
      avgRatings: 0,
      recommended: {},
      avgRecPercent: 0,
      characteristics: [],
    };
    this.getTotalReviews = this.getTotalReviews.bind(this);
    this.getRatingsAvg = this.getRatingsAvg.bind(this);
    this.getRecAvg = this.getRecAvg.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://18.224.200.47/reviews/${this.props.productId}/meta?count=30`)
      .then(({ data }) => {
        this.setState(
          {
            ratings: Object.assign({}, this.state.ratings, data.ratings),
          },
          () => {
            let totalReviews = this.getTotalReviews();
            let chars = Object.entries(data.characteristics);

            this.setState({
              numOfRatings: totalReviews,
              recommended: data.recommended,
              characteristics: chars,
            });
          }
        );
      })
      .then(() => {
        this.getRatingsAvg();
        this.getRecAvg();
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

  getRatingsAvg() {
    let weightedRatings = () => {
      let result = 0;
      for (let key in this.state.ratings) {
        result += key * this.state.ratings[key];
      }
      return result;
    };
    let ratings = weightedRatings();
    let numOfRatings = Object.values(this.state.ratings).reduce(
      (acc, prev) => acc + prev
    );
    let avg = ratings / numOfRatings;
    this.setState({
      avgRatings: avg,
    });
  }

  getRecAvg() {
    let totalRecs = Object.values(this.state.recommended).reduce(
      (acc, prev) => acc + prev
    );
    let positiveRecs = this.state.recommended['0'];
    let avgRec = (positiveRecs / totalRecs) * 100;

    this.setState({
      avgRecPercent: avgRec,
    });
  }

  render() {
    return (
      <div>
        <h6>Ratings & Reviews</h6>
        <RatingSummary
          avgRatings={this.state.avgRatings}
          numOfRatings={this.state.numOfRatings}
        />
        <br />
        <div>
          {this.state.avgRecPercent.toFixed(0) !== 'NaN'
            ? this.state.avgRecPercent.toFixed(0)
            : 0}
          % of reviews recommend this product
        </div>
        <br />
        <StarBreakdown
          changeView={this.props.changeView}
          stars={this.props.stars}
          filtered={this.props.filtered}
          ratings={this.state.ratings}
          numOfRatings={this.state.numOfRatings}
          handleClick={this.props.handleClick}
        />
        <br />
        <CharBreakdown characteristics={this.state.characteristics} />
      </div>
    );
  }
}

export default RatingsBreakdown;
