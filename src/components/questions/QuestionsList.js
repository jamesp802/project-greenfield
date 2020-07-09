import React from "react";
import AnswersList from "./AnswersList";
import { getDate } from "./questionsHelpers";
import QuestionModal from "./QuestionModal";
import AnswerModal from "./AnswerModal";
import { Button } from "react-bootstrap";
import axios from "axios";

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      showQuestionModal: false,
      showAnswerModal: false,
      helpful: [],
      question: {},
    };
    this.markHelpful = this.markHelpful.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  componentDidMount() {
    const result = localStorage.getItem(`${this.props.questions.question_id}`);
    // console.log(result);
    // this.setState(
    //   {
    //     helpful: result,
    //   }
    // );
    // console.log(this.props)
  }

  setQuestionModalShow() {
    this.state.showQuestionModal
      ? this.setState({ showQuestionModal: false })
      : this.setState({ showQuestionModal: true });
  }

  setAnswerModalShow() {
    this.state.showAnswerModal
      ? this.setState({ showAnswerModal: false })
      : this.setState({ showAnswerModal: true });
  }

  addAnswer(event) {
    let question = [];
    question.push(event.target.getAttribute("question_body"));
    question.push(event.target.getAttribute("question_id"));
    console.log(question);
    this.setState(
      {
        question: question,
      },
      () => this.setAnswerModalShow()
    );
  }

  markHelpful(event) {
    // console.log(event.target.getAttribute("value"));
    const question_id = event.target.getAttribute("value");
    const helpfulArray = this.state.helpful;
    if (localStorage.getItem(`${question_id} helpful`)) {
      alert("You have already submitted a vote for this question");
    } else {
      helpfulArray.push(question_id);
      axios
        .put(`http://18.224.200.47/qa/question/${question_id}/helpful`)
        .then(() => {
          this.setState({
            helpful: helpfulArray,
          });
        })
        .then(() => {
          localStorage.setItem(`${question_id} helpful`, true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <div>
          <div className="questions-container">
            {questions.map((question, index) => {
              return (
                <div key={index}>
                  <div id="questions-container-row">
                    <div>
                      <strong>Q: {question.question_body}</strong>
                    </div>
                    <div className="helpful-span answer">
                      Helpful?{" "}
                      <a
                        className="helpful-submit"
                        value={question.question_id}
                        onClick={(event) => this.markHelpful(event)}
                      >
                        Yes
                      </a>{" "}
                      (
                      {this.state.helpful.includes(`${question.question_id}`)
                        ? (question.question_helpfulness += 1)
                        : question.question_helpfulness}
                      ) |{" "}
                      <a
                        className="helpful-submit"
                        question_id={question.question_id}
                        question_body={question.question_body}
                        onClick={(event) => this.addAnswer(event)}
                      >
                        Add Answer
                      </a>
                    </div>
                  </div>
                  <div>
                    <AnswerModal
                      show={this.state.showAnswerModal}
                      onHide={() => this.setAnswerModalShow()}
                      product_name={this.props.product_name}
                      question={this.state.question}
                    />
                  </div>
                  <div id="answers-container">
                    <strong>A: </strong>
                    <span>
                      <AnswersList
                        qArray={this.state.questions}
                        answers={question.answers}
                        question_id={question.question_id}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {this.props.questions.length > 0 ? (
          <button
            className="questions-answers-button"
            onClick={this.props.moreQuestions}
          >
            MORE ANSWERED QUESTIONS
          </button>
        ) : null}
        <button
          className="questions-answers-button"
          variant="primary"
          onClick={() => this.setQuestionModalShow()}
        >
          ADD A QUESTION +
        </button>
        <div>
          <QuestionModal
            show={this.state.showQuestionModal}
            onHide={() => this.setQuestionModalShow()}
            addQuestion={this.addQuestion}
            product_id={this.props.product_id}
            product_name={this.props.product_name}
          />
        </div>
      </div>
    );
  }
}

export default QuestionsList;

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
