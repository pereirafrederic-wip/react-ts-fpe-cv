import React, { memo } from 'react'
import data from './data.json';
import { DiGithubAlt } from "react-icons/di";
interface ILink {
  id: number,
  name: string,
  url: string
}

interface IProps {
  link: ILink
}

enum ELinks {
  GITHUB = "github"

}

export default memo(({ link }: IProps) => {
  console.log("MEMO Link RENDERING");


  const switchLogo = () => {
    switch (link.name) {
      case ELinks.GITHUB:
        return DiGithubAlt;
    }
  }

  return (
    <div className="Link">
      <div className="name"><a href={link.url}>{link.name}</a> </div>
      <div className="logo">{switchLogo()} </div>
    </div>
  );
});