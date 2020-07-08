import React from "react";
import AnswersList from "./AnswersList";
import { getDate } from "./questionsHelpers";
import QuestionsModal from "./QuestionsModal";
import { Button } from "react-bootstrap";

// const QuestionsList = ({ questions }) => (

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.addQuestion = this.addQuestion.bind(this);
  }

  setModalShow() {
    this.state.showModal
      ? this.setState({ showModal: false })
      : this.setState({ showModal: true });
  }

    addQuestion(event) {
  //   axios.post(`http://18.224.200.47/qa/${this.state.product_id}`, {
  //     params: {
  //       body: data,
  //     }
  //   })
  console.log(event.target.value);
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
                  <div className="questions-container-row">
                    <strong>Q: {question.question_body}</strong>
                  </div>
                  <span className="helpful-span answer">
                    Helpful? <a className="helpful-submit">Yes</a> (
                    {question.question_helpfulness}) |{" "}
                    <a className="helpful-submit">Add Answer</a>
                  </span>
                  <div>
                    <strong>A: </strong>
                    <span>
                      <AnswersList
                        answers={question.answers}
                        question_id={question.question_id}
                      />
                    </span>
                  </div>
                  {/* <div>
                  {Object.keys(question.answers).slice(0,2).map((answer, index) => {
                    const item = question.answers[answer];
                    return <div  key={answer}> <strong>A:</strong> <div className='answer-body'> {item.body}
                    <div>{item.photos.map((photo, index)=> {
                      return <img key={index} src={photo} width="100px" height="100px"></img>})}</div></div>
                    <div className='answerer-info'>by {item.answerer_name}, {getDate(item.date)}</div>
                    <span className="helpful-span report">Helpful? <a>Yes</a> ({item.helpfulness}) | <a>Report</a></span></div>;
                  })}
                </div> */}
                </div>
              );
            })}{" "}
            {/*up to four displayed*/}
          </div>
          <div className="answers-container"> {/*up to two displayed*/}</div>
        </div>
        {this.props.questions.length > 0 ? <button className="questions-answers-button" onClick={() => this.props.moreQuestions()}>
          MORE ANSWERED QUESTIONS
        </button> : null}
        <button
          className="questions-answers-button"
          variant="primary"
          onClick={() => this.setModalShow()}
        >
          ADD A QUESTION +
        </button>
        <div>
          <QuestionsModal show={this.state.showModal} onHide={() => this.setModalShow()} addQuestion={this.addQuestion}/>
        </div>
      </div>
    );
  }
}

export default QuestionsList;

//TODO: add add question modal;

// addAnswer() {
//   axios.post(`http://18.224.200.47/qa/${question_id}/answers`)
// }

// markHelpful() {
// axios.put(`http://18.224.200.47/qa/question/${question_id}/helpful`)
// }

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


