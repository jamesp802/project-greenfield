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
        this.setState({
          questions: data.results,
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
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

export default Questions;

//TODO: Build a questions list;
//UP TO four questions should load;
//UP TO two answers should load;
//BOTH should have a 'load more {questions/answers}' function
