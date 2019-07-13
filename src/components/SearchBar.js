import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <form>
          <div className="ui fluid input">
            <input type="text" placeholder="Search for Videos..." />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
