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
    <span onClick={() => this.setState({more: true})}>LOAD MORE ANSWERS</span>)
  }


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
              <div className='answerer-info'>by {answer.answerer_name}, {getDate(answer.date)}</div>
              <span className="helpful-span report">Helpful? <a>Yes</a> ({answer.helpfulness}) | <a>Report</a></span>
            </div>
          );
        })}
        <div>{!this.state.more && this.state.answers.length > 2 ? this.moreAnswers() : null}</div>
      </div>
    );
  }
}



export default AnswersList;
