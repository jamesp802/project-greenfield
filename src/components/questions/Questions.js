import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import QuestionsList from "./QuestionsList";
import axios from "axios";

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
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    // event.preventDefault();
    axios
      .get(`http://18.224.200.47/qa/${this.state.product_id}`)
      .then(({ data }) => {
        console.log(data.results);
        let resultsSlice = data.results.slice(0, 4).sort(compare);
        this.setState({
          questions: data.results,
          results: resultsSlice,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  reportQuestion(event) {
    event.preventDefault();
    // let value = event.target.value;
    axios.put(`http://18.224.200.47/qa/question/${question_id}/report`)
    .then(() => {
      console.log('reported')
    })
    .catch(err => {
      console.error(err);
    })
  }

  markHelpful() {
  axios.put(`http://18.224.200.47/qa/question/${question_id}/helpful`)
  }

  addQuestion(data) {
    axios.post(`http://18.224.200.47/qa/${this.state.product_id}`, {
      params: {
        body: data,
      }
    })
  }

  addAnswer() {
    axios.post(`http://18.224.200.47/qa/${question_id}/answers`)
  }

  render() {
    return (
      <div className='questions-answers-container'>
        <h4 className='main-header'>QUESTIONS & ANSWERS </h4>
        <Search addQuestion={this.addQuestion} />
        <QuestionsList questions={this.state.results} />
      </div>
    );
  }
}

const compare = (b, a) => {
  const helpfulnessA = a.question_helpfulness;
  const helpfulnessB = b.question_helpfulness;

  let comparison = 0;
  if (helpfulnessA > helpfulnessB) {
    comparison = 1;
  } else if (helpfulnessB > helpfulnessA) {
    comparison = -1;
  }
  return comparison;
};

export default Questions;

//TODO: Build a questions list;
//UP TO two answers should load;
//BOTH should have a 'load more {questions/answers}' function
