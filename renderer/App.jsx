import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import StateComponent from './components/ChessBoard';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <AppContainer>
        <div className="App">
          <header>
            <h1>
            Change that text!
            </h1>
          </header>
          <StateComponent />
        </div>
      </AppContainer>
    );
  }
}

export default App;
