import React from "react";

const QuestionsList = ({ questions }) => (
  <div className="questions-answers-container">
    <div>
      <div className="questions-container">
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <div><strong>Q: {question.question_body}</strong></div>
              <span>Helpful? <a>Yes</a> ({question.question_helpfulness}) | <a>Add Answer</a></span>
              <div>
                {Object.keys(question.answers).map((answer, index) => {
                  const item = question.answers[answer];
                  return <div key={answer}><div><strong>A:</strong> <em>{item.body}</em>
                  <div>{item.photos.map((photo, index)=> {
                    return <img key={index} src={photo} width="100px" height="100px"></img>})}</div></div>
                  <div>by {item.answerer_name}, {getDate(item.date)}</div>
                  <span>Helpful? <a>Yes</a> ({item.helpfulness}) | <a>Report</a></span></div>;
                })}
              </div>
            </div>
          );
        })}{" "}
        {/*up to four displayed*/}
      </div>
      <div className="answers-container">Answers {/*up to two displayed*/}</div>
    </div>
    <button className="questions-answers-button">
      More Answered Questions
    </button>
    <button className="questions-answers-button">Add a Question +</button>
  </div>
);

const getDate = (date) => {
  const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const newDate = date.split('T').slice(0,1).join();

  const dateArray = newDate.split('-');

  return month[Number(dateArray[1]) - 1] + " " + Number(dateArray[2]) + ", " + dateArray[0]
}

export default QuestionsList;

//TODO: each question will have helpful | add answer;
//TODO: answers will also include the user, date | helpful | report;
//TODO: if photos exist, photos will be rendered below answer;
//TODO: load more answers button;
