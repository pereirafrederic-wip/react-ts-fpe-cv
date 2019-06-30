import React, { memo } from 'react'
import data from './data.json';
import { DiGithubAlt } from "react-icons/di";
import { IoMdLink } from "react-icons/io";

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

const logoSize =25;

export default memo(({ link }: IProps) => {
  console.log("MEMO Link RENDERING");


  const switchLogo = () => {
    console.log(link.name)
    switch (link.name) {
      case "github":
        return <DiGithubAlt size={logoSize} />;
        break
      default:
         return <IoMdLink size={logoSize} />;
    }
    return <IoMdLink size={logoSize} />;
  }

  return (
    <div className="Link" key={link.id}>
    <div className="Link__logo">{switchLogo()} </div>
      <div className="Link__name"><a href={link.url}>{link.name}</a> </div>
    </div>
  );
});