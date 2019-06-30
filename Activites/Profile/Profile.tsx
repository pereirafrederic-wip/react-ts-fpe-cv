import React, { memo } from 'react'


interface IProfile {
  id: number
  name: string
  version: string
  pratiquePro: string
  pratiquePerso: string
  level: number,
  info: string
}

interface IProps {
  profile: IProfile
}

export default memo(({ profile }: IProps) => {
  console.log("MEMO Profiles RENDERING");



  return (
    <div className="Profile" key={profile.id}>


      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{profile.name}</p>
              <p className="subtitle is-6">{profile.version}</p>
              <p className="subtitle is-6">{profile.pratiquePerso}</p>
              <p className="subtitle is-6">{profile.pratiquePerso}</p>
              <p className="subtitle is-6">{profile.level}</p>

            </div>
          </div>

          <div className="content">
            {profile.info}
          </div>
        </div>
      </div>
    </div>
  );
});