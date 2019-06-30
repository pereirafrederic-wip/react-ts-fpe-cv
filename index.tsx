import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';
import Activites from './Activites/Activites';
import Links from './Links/Links';
import Formations from './Formations/Formations';



import 'bulma/css/bulma.css'
import './style.scss';

interface AppProps { }
interface AppState { }


class CV extends Component<AppProps, AppState> {


  render() {
    return (
      <div className="CV">
        <Identite />
        <Formations />
        <Activites />

        <Links />
      </div>
    );
  }
}

render(<CV />, document.getElementById('root'));
