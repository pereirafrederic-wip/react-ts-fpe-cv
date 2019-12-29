import React, { memo } from "react";

import {
  DiReact,
  DiAngularSimple,
  DiJava,
  DiMongodb,
  DiDocker,
  DiExtjs,
  DiPostgresql,
  DiMysql
} from "react-icons/di";

import { FaVuejs, FaJenkins, FaLinux, FaNode } from "react-icons/fa";
interface IProfile {
  id: number;
  name: string;
  code: string;
  version: string;
  pratiquePro: string;
  pratiquePerso: string;
  level: number;
  info: string;
}

interface IProps {
  profile: IProfile;
}
const logoSize = 35;

export default memo(({ profile }: IProps) => {
  console.log("MEMO Profiles RENDERING");

  const switchLogo = () => {
    console.log(profile.code);
    switch (profile.code) {
      case "java":
        return <DiJava size={logoSize} />;

      case "react":
        return <DiReact size={logoSize} />;

      case "angular":
      case "angularJs":
        return <DiAngularSimple size={logoSize} />;

      case "mongo":
        return <DiMongodb size={logoSize} />;

      case "docker":
        return <DiDocker size={logoSize} />;

      case "extJs":
        return <DiExtjs size={logoSize} />;

      case "vue":
        return <FaVuejs size={logoSize} />;

      case "jenkins":
        return <FaJenkins size={logoSize} />;

      case "postgresql":
        return <DiPostgresql size={logoSize} />;

      case "mysql":
        return <DiMysql size={logoSize} />;

      case "linux":
        return <FaLinux size={logoSize} />;
      case "nodejs":
        return <FaNode size={logoSize} />;

      default:
        return <DiReact size={logoSize} color={"white"} />;
    }
  };

  return (
    <div className="Profile" key={profile.id}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by4" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-2by4">{switchLogo()}</figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{profile.name}</p>
              <p className="subtitle is-6">{`version utilisé : ${
                profile.version
              }`}</p>
              <p className="subtitle is-6">{`pratique en milieu professionnel : ${
                profile.pratiquePro
              }`}</p>
              <p className="subtitle is-6">{`pratique en projet perso : ${
                profile.pratiquePerso
              }`}</p>
              <p className="subtitle is-6">{`niveau estimé : ${
                profile.level
              }`}</p>
            </div>
          </div>

          <div className="content">{profile.info}</div>
        </div>
      </div>
    </div>
  );
});
