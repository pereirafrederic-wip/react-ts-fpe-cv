import React, { memo } from 'react'

import { DiReact, DiAngularSimple, DiJava, DiMongodb ,FaDocker} from "react-icons/di";

interface IProfile {
  id: number
  name: string
  code: string
  version: string
  pratiquePro: string
  pratiquePerso: string
  level: number,
  info: string
}

interface IProps {
  profile: IProfile
}
const logoSize= 25;

export default memo(({ profile }: IProps) => {
  console.log("MEMO Profiles RENDERING");

  const switchLogo = () => {
    console.log(profile.code)
    switch (profile.code) {
      case "java":
        return <DiJava size={logoSize} />;
        break
              case "react":
        return <DiReact size={logoSize} />;
        break
              case "angular":
              case "angularJs":
        return <DiAngularSimple size={logoSize} />;
        break
              case "mongo":
        return <DiMongodb size={logoSize} />;
        break
              case "docker":
        return <FaDocker size={logoSize} />;
        break
              case "react":
        return <DiReact size={logoSize} />;
        break

      default:
         return <DiReact size={logoSize} />;
    }
    return <DiReact size={logoSize} />;
  }

  return (
    <div className="Profile" key={profile.id}>


      <div className="card">
        <div className="card-image">
          <figure className="image is-2by4">
          {this.switchLogo()}
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-2by4">
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