import React from "react";
import {getDate, compare} from "./questionsHelpers";

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      more: false,
    };
  }

  componentDidMount() {
    this.createArray();
  }

  createArray() {
    const results = [];
    const keyArray = Object.keys(this.props.answers);
    keyArray.forEach((key) => {
      results.push(this.props.answers[key]);
    });
    this.setState({
      answers: results,
    });
  }

  moreAnswers() {
    return(
    <span className='more-answers helpful-submit' onClick={() => this.setState({more: true})}>LOAD MORE ANSWERS</span>)
  }

  // markHelpful(event) {
    // const answer_id = event.target.value
    // axios.put(`http://18.224.200.47/qa/answer/${answer_id}/helpful`)
  // }

  // reportAnswer(event) {
    // const answer_id = event.target.value
    // axios.put(`http://18.224.200.47/qa/answer/${answer_id}/report`)
  // }


  render() {
    let answersArray = [];
    this.state.more ? answersArray = this.state.answers.sort(compare) : answersArray = this.state.answers.slice(0,2).sort(compare);
    return (
      <div>
        {answersArray.map((answer, index) => {
          return (
            <div key={index}>
              <em>{answer.body}</em>
              <div>
                {answer.photos.map((photo, index) => {
                  return (
                    <img
                      key={index}
                      src={photo}
                      width="50px"
                      height="50px"
                    ></img>
                  );
                })}
              </div>
              <div className='answerer-info'>by {answer.answerer_name === "Seller" ? <strong>{answer.answerer_name}</strong> : answer.answerer_name}, {getDate(answer.date)}</div>
              <span className="helpful-span report">Helpful? <a className='helpful-submit'>Yes</a> ({answer.helpfulness}) | <a className='helpful-submit'>Report</a></span>
            </div>
          );
        })}
        <div>{!this.state.more && this.state.answers.length > 2 ? this.moreAnswers() : null}</div>
      </div>
    );
  }
}

export default AnswersList;

//TODO: conditional render of reported & helpful buttons;
//TODO: re-factor answers list to use API request IOT ensure that reported answers are not provided;
//TODO: add add-answer modal;
