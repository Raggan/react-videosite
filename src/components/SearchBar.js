import React, { Component } from "react";

class SearchBar extends Component {
  state = { text: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };
  render() {
    return (
      <div className="ui raised segment">
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="ui fluid input">
            <input
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
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
