import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';

import activites from './activites.json';

import './style.scss';
import 'bulma/css/bulma.css'

interface AppProps { }
interface AppState {
  activite: number | null
}

class App extends Component<AppProps, AppState> {

constructor(props){
  super(props)
  this.state = {
    activite : null
  }
}

changeActiviteActive = (id) => {
  this.setState({activite : id})
}
isActive(id){
  const activite = this.state
  if(activite === id) return 'is-active';
  return 'not-active'
}

  render() {
    return (
      <div className="CV">
          <Identite />

        <div className="tabs is-centered">
          <ul>
            {activites.map( activite => <li className={this.isActive(activite.id)}><a onClick={() => this.changeActiviteActive.bind(this, activite.id)}>{activite.name}</a></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
