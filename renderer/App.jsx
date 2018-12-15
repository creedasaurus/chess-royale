import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessGame from './reducers';
import StateComponent from './components/ChessBoard';

const store = createStore(chessGame);

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <div className="App">
            <header>
              <h1>
                Chess Royale
              </h1>
            </header>
            <StateComponent />
          </div>
        </Provider>
      </AppContainer>
    );
  }
}

export default App;
