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
      numOfReviews: 2,
      showMore: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getData(
      `http://18.224.200.47/reviews/${this.props.productId}/list?count=30`
    );
  }

  changeView() {
    this.setState({
      filtered: false,
      starCount: [],
      numOfReviews: this.state.numOfReviews + 2,
    });
  }

  loadMoreReviews() {
    if (this.props.reviews.length > this.state.numOfReviews) {
      this.setState({
        numOfReviews: this.state.numOfReviews + 2,
      });
    } else {
      this.setState({
        showMore: false,
      });
    }
  }

  renderView() {
    if (!this.state.filtered) {
      let reviews = this.props.reviews.slice(0, this.state.numOfReviews);
      return (
        <ReviewsList
          loadMoreReviews={this.loadMoreReviews}
          name={this.props.name}
          productId={this.props.productId}
          show={this.state.showMore}
          clickHandler={this.loadMoreReviews}
          reviews={reviews}
        />
      );
    } else {
      let filtered = this.props.reviews.filter((review) =>
        this.state.starCount.includes(review.rating)
      );
      return (
        <ReviewsList reviews={filtered} productId={this.props.productId} />
      );
    }
  }

  handleClick(starCount) {
    this.setState({
      filtered: true,
    });

    let star = Number(starCount.target.textContent.slice(0, 1));
    if (!this.state.starCount.includes(star)) {
      this.setState({
        starCount: [...this.state.starCount, star],
      });
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

  closeModal() {
    this.setState({
      filtered: false,
    });
  }

  render() {
    return (
      <div id="anchor" className="ratingsReviewContainer container">
        <div className="ratingsBreakdown">
          <RatingsBreakdown
            productId={this.props.productId}
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
