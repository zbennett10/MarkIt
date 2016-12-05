import React, { Component } from 'react';
import './App.css';

var placeholder = "# Look at this markdown yo!";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MarkIt! - Markdown Previewer</h1>
        <MarkdownArea />
      </div>
    );
  }
}

class MarkdownArea extends Component {
    render() {
        return(
            <div>
                <textarea className="input">{placeholder}</textarea>
                <div className="output">{placeholder}</div>
            </div>
        );
    }
}

export default App;
