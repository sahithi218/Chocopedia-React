import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setQuery } from "../actionCreators/search";

const Search = props => {
  const [searchText, setSearchText] = useState({ query: "" });
  const handleChange = e => {
    const { value } = e.target;
    setSearchText({
      query: value
    });
  };
  const handleSearch = () => {
    // let query = document.getElementById("chocName").value;
    let { query } = searchText;
    props.dispatch(setQuery(query));
    props.history.push(`/search?q=${query}`);
  };
  return (
    <React.Fragment>
      <input type="search" id="searchText" onChange={e => handleChange(e)} />{" "}
      <button onClick={() => handleSearch()}>Search</button>
    </React.Fragment>
  );
};

export default withRouter(connect()(Search));
