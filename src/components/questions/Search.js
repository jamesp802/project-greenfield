import React from "react";
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      input: value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            label="search"
            onChange={this.handleChange}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;

//TODO: //render questions relevant to search
