import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';
import Activites from './Activites/Activites'



import './style.scss';
import 'bulma/css/bulma.css'

interface AppProps { }
interface AppState { }


class App extends Component<AppProps, AppState> {

  constructor(props) {
    super(props)
    this.state = {
      activiteActive: null
    }
  }

 

  render() {
    return (
      <div className="CV">
        <Identite />
        <Activites />


        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
