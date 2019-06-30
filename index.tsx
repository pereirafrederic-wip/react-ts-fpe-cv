import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';
import './style.scss';

interface AppProps { }
interface AppState {
}

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <div className="CV">
        <Identite />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
