import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    error: ""
  };

  //Handling Submit
  handleSubmit = (event) => {
    event.preventDefault();
    //Parent handle Submit method
    this.props.handleSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="ui icon input">
              <input
                onChange={(event) =>
                  this.setState({ searchTerm: event.target.value })
                }
                value={this.state.searchTerm}
                type="text"
                placeholder="Search..."
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;
