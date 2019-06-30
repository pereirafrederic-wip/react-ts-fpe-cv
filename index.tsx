import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';

import activites from './activites.json';

import './style.scss';
import 'bulma/css/bulma.css'

interface AppProps { }
interface AppState {
  activiteActive: number | null
}

class App extends Component<AppProps, AppState> {

  constructor(props) {
    super(props)
    this.state = {
      activiteActive: null
    }
  }

  changeActiviteActive(id) {
    console.log("changeActiviteActive", id)
    this.setState({ activiteActive: id })
  }
  isActive(id) {
    const {activiteActive}  = this.state
    console.log(activiteActive , id)
    if (activiteActive == id) return 'is-active';
    return 'not-active'
  }

  render() {
    return (
      <div className="CV">
        <Identite />

        <div className="tabs is-centered">
          <ul>
            {activites.map(activite => <li className={`activite ${this.isActive( activite.id)} `}
              onClick={this.changeActiviteActive.bind(this, activite.id)}
            ><a>{activite.name}</a></li>)}
          </ul>
        </div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
