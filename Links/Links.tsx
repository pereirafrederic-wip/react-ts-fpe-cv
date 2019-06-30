import React, { Component } from 'react'
import data from './data.json'
import Link from './Link/Link'


interface IProps {
}

interface IState {
}

export default class Links extends Component<IState, IProps> {



  render() {
    console.log("MEMO Links RENDERING", data);
    return (
      <footer className="footer color-white">
        <div className="content has-text-centered Links">
          {data.map(link => <Link link={link} />)}
        </div>
      </footer>
    )
  }
}