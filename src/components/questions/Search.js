import React from "react";
import axios from "axios";
import { Search } from "react-bootstrap-icons";

const Searchbar = (props) => {
  return (
    <div>
      <form>
        <label htmlFor='search questions'/>
        <input
          className="search-bar-row"
          type="text"
          label="search"
          onChange={props.handleChange}
          placeholder="  HAVE A QUESTION? SEARCH FOR ANSWERS..."
        ></input>
        <Search id='search-icon'/>
      </form>
    </div>
  );
};

export default Searchbar;

//TODO: //render questions relevant to search
