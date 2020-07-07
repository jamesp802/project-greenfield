import React from "react";
import AnswersList from './AnswersList'
import {getDate} from "./questionsHelpers"

const QuestionsList = ({ questions }) => (
  <div>
    <div>
      <div className="questions-container">
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <div className='questions-container-row'><strong>Q: {question.question_body}</strong></div>
              <span className="helpful-span answer">Helpful? <a className='helpful-submit'>Yes</a> ({question.question_helpfulness}) | <a className='helpful-submit'>Add Answer</a></span>
              <div><strong>A: </strong>
              <span>
                <AnswersList answers={question.answers}/>
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
    <button className="questions-answers-button">
      MORE ANSWERED QUESTIONS
    </button>
    <button className="questions-answers-button">ADD A QUESTION  +</button>
  </div>
);

export default QuestionsList;

//TODO: refactor as stateful to allow for add answer, vote helpful, report question;
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