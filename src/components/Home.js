import React from "react";
import { increaseCount, getPosts } from "../actions/actionCreators";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <button onClick={() => props.increase()}>count btn</button>
      <p>{props.count}</p>
      <button onClick={() => props.getData()}>get data</button>
      <p>{JSON.stringify(props.data)}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counts,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCount()),
    getData: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
