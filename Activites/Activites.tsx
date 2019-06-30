import React, { Component } from 'react'
import data from './data.json';


interface IProps {
}

interface IState {
    activiteActive: number | null
}

export default class Activites extends Component<IState, IProps> {

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
    const {activiteActive}:any  = this.state
    console.log(activiteActive , id)
    if (activiteActive == id) return 'is-active';
    return 'not-active'
  }


    render() {
    return ( <div className="tabs is-centered">
    <ul>
      {data.map(activite => <li key={activite.id} className={`activite ${this.isActive(activite.id)} `}
        onClick={this.changeActiviteActive.bind(this, activite.id)}
      ><a>{activite.name}</a></li>)}
    </ul>
  </div>
  )}
}