import React, { Component } from 'react';
import Menu from './Menu';
import Alphabet from './Alphabet';
import SelectedLetter from './SelectedLetter';
import './App.css';

const Context = React.createContext();

class Provider extends Component {
  state = {
    chiefExecutive: 'Charlie Waite',
  }

  render() {
    return (
      <Context.Provider
        value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className= "App-menu">
            <Menu />
          </div>
          <div className= "App-main">
            <SelectedLetter />
            <Alphabet />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
