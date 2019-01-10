import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Step 3: create callback
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // Step 5: prevent return key to submit form / refresh page
  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Callback from parent component from App component
  };

  // Step 1: render search input
  // Step 2: make controlled element by setting search value property to state.term
  // Step 4: make controlled element for form submit
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
