import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Callback for form input new render
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // Prevent return key to submit form / refresh page
  onFormSubmit = event => {
    event.preventDefault();

    // Invoke the prop we got from parent to pass searched term back to App.js
    this.props.uponSubmit(this.state.term);
  };

  // Controlled element by having (1) states and (2) onSubmit
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
