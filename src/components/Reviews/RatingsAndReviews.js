import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/ReviewActions/actions';
import RatingsBreakdown from './reviewRatingsHelpers/RatingsBreakdown';
import ReviewsList from './reviewRatingsHelpers/ReviewsList';
import './reviewsStyle.css';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
      starCount: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  // add state and method
  componentDidMount() {
    this.props.getData(`http://18.224.200.47/reviews/4/list`);
  }

  changeView() {
    this.setState({
      filtered: false,
      starCount: [],
    });
  }

  renderView() {
    if (!this.state.filtered) {
      return <ReviewsList reviews={this.props.reviews} />;
    } else {
      let filtered = this.props.reviews.filter((review) =>
        this.state.starCount.includes(review.rating)
      );
      console.log('filtered reviews: ', filtered);
      return <ReviewsList reviews={filtered} />;
    }
  }

  handleClick(starCount) {
    this.setState({
      filtered: true,
    });

    let star = Number(starCount.target.textContent.slice(0, 1));
    if (!this.state.starCount.includes(star)) {
      this.setState(
        {
          starCount: [...this.state.starCount, star],
        },
        () => {
          console.log('star var: ', star);
          console.log('new state: ', this.state);
        }
      );
    } else {
      let removed = this.state.starCount.filter(
        (currStar) => currStar !== star
      );
      this.setState(
        {
          starCount: [...removed],
        },
        () => {
          if (this.state.starCount.length === 0) {
            this.setState({
              filtered: false,
            });
          }
        }
      );
    }
  }

  render() {
    console.log('RATINGS AND REVIEWS STATE: ', this.props.reviews);
    return (
      <div className="ratingsReviewContainer">
        <div className="ratingsBreakdown">
          <RatingsBreakdown
            changeView={this.changeView}
            stars={this.state.starCount}
            filtered={this.state.filtered}
            handleClick={this.handleClick}
          />
        </div>
        <div className="reviewsList">{this.renderView()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviewsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(getReviews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
