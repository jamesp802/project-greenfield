import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import QuestionsList from "./QuestionsList";
import axios from "axios";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      results: [],
      moreQuestions: 0,
      moreAnswers: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //axios request to API regarding product displayed
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submission:", this.state.value);
    axios
      .get(`http://18.224.200.47/qa/5`)
      .then(({ data }) => {
        console.log(data.results);
        let resultsSlice = data.results.slice(0, 4).sort(compare);
        this.setState({
          questions: data.results,
          results: resultsSlice
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Questions & Answers </h2>
        <Search handleSubmit={this.handleSubmit} />
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
}

export default Questions;

//TODO: Build a questions list;
//UP TO two answers should load;
//BOTH should have a 'load more {questions/answers}' function
