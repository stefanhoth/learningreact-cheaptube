import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: this.props.defaultSearchTerm };

  componentDidMount() {
    this.props.onSubmit(this.state.term);
  }

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
              name="term"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              onClick={(e) => {
                e.target.value = "";
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
