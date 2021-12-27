import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui red segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
