import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import QuestionsList from "./QuestionsList";
import axios from "axios";
import { compareQuestions } from "./questionsHelpers";
import "./questionsStyles.css";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      results: [],
      moreQuestions: 0,
      product_id: this.props.productId || 5,
      input: "",
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.moreQuestions = this.moreQuestions.bind(this);
    this.sliceQuestions = this.sliceQuestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios
      .get(`http://18.224.200.47/qa/${this.state.product_id}`, {
        params: {
          count: 10,
        },
      })
      .then(({ data }) => {
        console.log(data.results);
        let resultsSlice = this.sliceQuestions(data.results);
        this.setState({
          questions: data.results,
          results: resultsSlice,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  sliceQuestions(data) {
    if (this.state.moreQuestions === 0) {
      return data.slice(0, 2).sort(compareQuestions);
    } else if (this.state.moreQuestions === 1) {
      return data.slice(0, 4).sort(compareQuestions);
    } else {
      return this.state.questions;
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(
      {
        input: value,
      },
      () => {
        if (this.state.input.length >= 3) {
          this.searchQuestions(this.state.input);
        } else if (this.state.input.length < 3) {
          let resultsSlice = this.sliceQuestions(this.state.questions);
          this.setState({
            results: resultsSlice,
          });
        }
      }
    );
  }

  searchQuestions(value) {
    let resultsArray = this.state.questions;
    resultsArray = resultsArray.filter(
      (question) =>
        question.question_body.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    this.setState({
      results: resultsArray,
    });
  }

  moreQuestions() {
    const questions = this.state.questions;
    if (this.state.moreQuestions < 2) {
      this.setState(
        {
          moreQuestions: this.state.moreQuestions + 1,
        },
        () =>
          this.setState({
            results: this.sliceQuestions(questions),
          })
      );
    } else {
      this.setState({
        results: questions,
      });
    }
  }

  handleClick(target) {
    console.log(target);
  }

  render() {
    console.log(this.props.name)
    return (
      <div className="questions-answers-container container">
        <h4 className="main-header">{"QUESTIONS & ANSWERS"} </h4>
        <Search handleChange={this.handleChange} />
        <QuestionsList
          product_name={this.props.name}
          product_id={this.state.product_id}
          questions={this.state.results}
          moreQuestions={this.moreQuestions}
        />
      </div>
    );
  }
}

export default Questions;
