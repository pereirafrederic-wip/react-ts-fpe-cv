import React, { Component } from 'react'
import data from './data.json'
import Link from './Link/Link'


interface IProps {
}

interface IState {
}

export default class Links extends Component<IState, IProps> {



  render() {
     console.log("MEMO Identite RENDERING");
    return (
      <footer className="footer">
        <div className="content has-text-centered">
        {data.map(link => <Link link={link}/>)}
        </div>
      </footer>
    )
  }
}