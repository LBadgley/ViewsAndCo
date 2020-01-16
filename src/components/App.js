import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit = (searchTerm) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}>
      </div>
    );
  }
}

export default App;
