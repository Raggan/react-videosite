import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui raised segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid input">
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Search for Videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
