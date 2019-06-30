import React, { Component } from 'react';
import { render } from 'react-dom';
import Identite from './Identite/Identite';
import Activites from './Activites/Activites';
import Links from './Links/Links';




import './style.scss';
import 'bulma/css/bulma.css'

interface AppProps { }
interface AppState { }


class CV extends Component<AppProps, AppState> {


  render() {
    return (
      <div className="CV">
        <Identite />
        <Activites />

        <Links />
      </div>
    );
  }
}

render(<CV />, document.getElementById('root'));
