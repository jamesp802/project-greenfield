import React from "react";
import axios from "axios";
import { getDate, compareAnswers } from "./questionsHelpers";

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      more: false,
      helpful: false,
      reported: false,
    };
    this.getAnswers = this.getAnswers.bind(this);
    this.pullSeller = this.pullSeller.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    axios
      .get(`http://18.224.200.47/qa/${this.props.question_id}/answers`)
      .then(({ data }) => {
        this.setState({
          answers: data.results,
        });
        console.log(this.state.answers);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // createArray() {
  //   const results = [];
  //   const keyArray = Object.keys(this.props.answers);
  //   keyArray.forEach((key) => {
  //     results.push(this.props.answers[key]);
  //   });
  //   this.setState({
  //     answers: results,
  //   });
  // }

  moreAnswers() {
    return (
      <span
        className="more-answers helpful-submit"
        onClick={() => this.setState({ more: true })}
      >
        LOAD MORE ANSWERS
      </span>
    );
  }

  markHelpful(event) {
    const answer_id = event.target.value;
    axios
      .put(`http://18.224.200.47/qa/answer/${answer_id}/helpful`)
      .then(() => {
        this.setState({
          helpful: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  reportAnswer(event) {
    const answer_id = event.target.value;
    axios
      .put(`http://18.224.200.47/qa/answer/${answer_id}/report`)
      .then(() => {
        this.setState({
          reported: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  pullSeller(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].answerer_name === "Seller") {
        let result = array.splice(i, 1);
        array.unshift(result[0]);
      }
    }
    return array;
  }

  render() {
    let answersArray = [];
    this.state.more
      ? (answersArray = this.state.answers.sort(compareAnswers))
      : (answersArray = this.state.answers.slice(0, 2).sort(compareAnswers));
    answersArray = this.pullSeller(answersArray);
    return (
      <div>
        {answersArray.map((answer, index) => {
          return (
            <div key={index}>
              <em>{answer.body}</em>
              <div>
                {answer.photos.map((photo) => {
                  return (
                    <img
                      key={photo.id}
                      src={photo.url}
                      width="50px"
                      height="50px"
                    ></img>
                  );
                })}
              </div>
              <div className="answerer-info">
                by{" "}
                {answer.answerer_name === "Seller" ? (
                  <strong>{answer.answerer_name}</strong>
                ) : (
                  answer.answerer_name
                )}
                , {getDate(answer.date)}
              </div>
              <span className="helpful-span report">
                Helpful?{" "}
                <a className="helpful-submit" value={answer.answer_id}>
                  Yes
                </a>{" "}
                ({answer.helpfulness}) |{" "}
                <a className="helpful-submit" value={answer.answer_id}>
                  Report
                </a>
              </span>
            </div>
          );
        })}
        <div>
          {!this.state.more && this.state.answers.length > 2
            ? this.moreAnswers()
            : null}
        </div>
      </div>
    );
  }
}

export default AnswersList;

//TODO: conditional render of reported & helpful buttons;
//TODO: re-factor answers list to use API request IOT ensure that reported answers are not provided;
//TODO: add add-answer modal;
