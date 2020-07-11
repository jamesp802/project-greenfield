import React from "react";
import axios from "axios";
import { getDate, compareAnswers } from "./questionsHelpers";

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      more: false,
      helpful: [],
      reported: [],
    };
    this.getAnswers = this.getAnswers.bind(this);
    this.pullSeller = this.pullSeller.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    const { question_id } = this.props;
    axios
      .get(`http://18.224.200.47/qa/${question_id}/answers`, {
        params: {
          count: 10,
        },
      })
      .then(({ data }) => {
        this.setState({
          answers: data.results,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  lessAnswers() {
    return (
      <span
        className="more-answers helpful-submit"
        onClick={() => this.setState({ more: false })}
      >
        COLLAPSE ANSWERS
      </span>
    );
  }

  markHelpful(event) {
    const answer_id = event.target.getAttribute("value");
    const helpfulArray = this.state.helpful;
    if (localStorage.getItem(`${answer_id} helpful`)) {
      alert("You have already submitted a vote for this answer");
    } else {
      helpfulArray.push(answer_id);
      axios
        .put(`http://18.224.200.47/qa/answer/${answer_id}/helpful`)
        .then(() => {
          this.setState({
            helpful: helpfulArray,
          });
        })
        .then(() => {
          localStorage.setItem(`${answer_id} helpful`, true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  reportAnswer(event) {
    const answer_id = event.target.getAttribute("value");
    const reportedArray = this.state.reported;
    if (localStorage.getItem(`${answer_id} reported`)) {
      alert("You have already reported this answer");
    } else {
      reportedArray.push(answer_id);
      axios
        .put(`http://18.224.200.47/qa/answer/${answer_id}/report`)
        .then(() => {
          this.setState({
            reported: reportedArray,
          });
        })
        .then(() => {
          localStorage.setItem(`${answer_id} reported`, true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  pullSeller(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].answerer_name === "Seller") {
        const result = array.splice(i, 1);
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
            <div key={index} id="answer-body">
              {answer.body}
              <div>
                {answer.photos.map((photo) => {
                  return (
                    <img
                      key={photo.id}
                      src={photo.url}
                      style={{
                        width: "50px",
                        height: "35px",
                        marginLeft: "5%",
                      }}
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
                <span className="helpful-span report">
                  {" "}
                  | Helpful?{" "}
                  <a
                    className="helpful-submit"
                    value={answer.answer_id}
                    onClick={(event) => {
                      this.markHelpful(event);
                    }}
                  >
                    Yes
                  </a>{" "}
                  (
                  {!this.state.helpful.includes(`${answer.answer_id}`)
                    ? answer.helpfulness
                    : (answer.helpfulness += 1)}
                  ) |{" "}
                  <a
                    className="helpful-submit"
                    value={answer.answer_id}
                    onClick={(event) => this.reportAnswer(event)}
                  >
                    {!this.state.reported.includes(`${answer.answer_id}`)
                      ? "Report"
                      : "Reported"}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
        <div>
          {!this.state.more && this.state.answers.length > 2
            ? this.moreAnswers()
            : this.state.more
            ? this.lessAnswers()
            : null}
        </div>
      </div>
    );
  }
}

export default AnswersList;

//TODO: conditional render of reported & helpful buttons;
