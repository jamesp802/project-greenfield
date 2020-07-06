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
      input: ''
    };

    this.getQuestions = this.getQuestions.bind(this);
    // this.addQuestion = this.addQuestion.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      input: value,
    },() => {
      if (this.state.input.length >= 3) {
        this.searchQuestions(this.state.input);
      } else if (this.state.input.length < 3) {
        let resultsSlice = this.state.questions.slice(0,4).sort(compare);
        this.setState({
          results: resultsSlice
        })
      }
    });

  }

  // reportQuestion(event) {
  //   event.preventDefault();
  //   // let value = event.target.value;
  //   axios.put(`http://18.224.200.47/qa/question/${question_id}/report`)
  //   .then(() => {
  //     console.log('reported')
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  // markHelpful() {
  // axios.put(`http://18.224.200.47/qa/question/${question_id}/helpful`)
  // }

  // addQuestion(data) {
  //   axios.post(`http://18.224.200.47/qa/${this.state.product_id}`, {
  //     params: {
  //       body: data,
  //     }
  //   })
  // }

  searchQuestions(value) {
    let resultsArray = this.state.results;
    resultsArray = resultsArray.filter(question => question.question_body.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.setState({
      results: resultsArray
    });
  }

  // addAnswer() {
  //   axios.post(`http://18.224.200.47/qa/${question_id}/answers`)
  // }

  render() {
    return (
      <div className='questions-answers-container'>
        <h4 className='main-header'>QUESTIONS & ANSWERS </h4>
        <Search handleChange={this.handleChange} />
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


//votes persist in localStorage
  //elements that are likely to be used heavily client-side and don't need to be 'controlled' (authentication) can be
    //cache-control
//component should accordion (how much to display?)
//add a question can be a modal pop-up;