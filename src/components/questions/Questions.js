import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import QuestionsList from "./QuestionsList";
import axios from "axios";
import {compareQuestions} from './questionsHelpers';
import "./questionsStyles.css";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      results: [],
      moreQuestions: 0,
      moreAnswers: 0,
      product_id: 5,
      input: "",
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.moreQuestions = this.moreQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios
      .get(`http://18.224.200.47/qa/${this.state.product_id}`)
      .then(({ data }) => {
        console.log(data.results);
        let resultsSlice = data.results.slice(0, 4).sort(compareQuestions);
        this.setState({
          questions: data.results,
          results: resultsSlice,
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
          let resultsSlice = this.state.questions.slice(0, 4).sort(compareQuestions);
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
    this.setState({
      results: questions
    })
  }

  render() {
    return (
      <div className="questions-answers-container">
        <h4 className="main-header">QUESTIONS & ANSWERS </h4>
        <Search handleChange={this.handleChange} />
        <QuestionsList questions={this.state.results} moreQuestions={this.moreQuestions}/>
      </div>
    );
  }
}

export default Questions;

//TODO: Build a questions list;
//UP TO two answers should load;
//BOTH should have a 'load more {questions/answers}' function

//votes persist in localStorage
//elements that are likely to be used heavily client-side and don't need to be 'controlled' (authentication) can be
//cache-control
//component should accordion (how much to display?)
//add a question can be a modal pop-up;
