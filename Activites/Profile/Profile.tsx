import React, { memo } from 'react'


interface IProfile {
  id: number
  name: string
  version: string
  pratiquePro: string
  pratiquePerso: string
  level: number
}

interface IProps {
  profile: IProfile
}

export default memo(({ profile }: IProps) => {
  console.log("MEMO Profiles RENDERING");



  return (
    <div className="Profile" key={profile.id}>
      <div className="Profile__name">{profile.name} </div>
      <div className="Profile__pratiquepro">{profile.pratiquePro} </div>
    </div>
  );
});