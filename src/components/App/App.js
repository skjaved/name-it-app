import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: 'Name It!',
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  handleSearchInput = (inputValue) => {
    this.setState({
      headerExpanded: !inputValue,
      suggestedNames: inputValue ? name(inputValue) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleSearchInput} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
