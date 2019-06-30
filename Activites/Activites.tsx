import React, { Component } from 'react'
import data from './data.json';
import Profile from './Profile/Profile'

interface IProps {
}

interface IState {
  activiteActiveId?: number | null
}

export default class Activites extends Component<IState, IProps> {

  constructor(props) {
    super(props)
    this.state = {
      activiteActiveId: null
    }
  }


  changeActiviteActive(id) {
    console.log("changeActiviteActive", id)
    this.setState({ activiteActiveId: id })
  }
  isActive(id) {
    const { activiteActiveId }: any = this.state
    console.log(activiteActiveId, id)
    if (activiteActiveId == id) return 'is-active';
    return 'not-active'
  }


  render() {

      const { activiteActiveId }: any = this.state

      console.log(data.filter( activite => activite.id ===activiteActiveId))
    return (
      <div className="Activites">
        <div className="tabs is-centered">
          <ul>
            {data.map(activite => <li key={activite.id} className={`activite ${this.isActive(activite.id)} `}
              onClick={this.changeActiviteActive.bind(this, activite.id)}
            ><a>{activite.name}</a></li>)}
          </ul>
        </div>
        <div className="profile">
        {data.filter( activite => activite.id ===activiteActiveId).length > 0 && data.filter( activite => activite.id ===activiteActiveId)[0].profiles && (
          data.filter( activite => activite.id ===activiteActiveId)[0].profiles.reverse().map( profile => <Profile profile={profile} />)
          
        )}
        </div>
      </div>
    )
  }
}