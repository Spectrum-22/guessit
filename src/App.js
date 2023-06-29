import React from 'react'
import Header from '../src/components/Header/Header'
import './App.css'
import ResultsContainer from '../src/components/ResultsContainer/ResultsContainer'
import SearchBox from '../src/components/SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

   state = {
        headerExpanded: true,
        suggestedNames: [],
    };

    handleSearch = (searchText) => {
        this.setState({
            headerExpanded: !searchText,
            suggestedNames: searchText ? name(searchText) : [],
        });
    };

 render() {
        return (
            <div className="app-container">
                <Header headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleSearch} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}


export default App;