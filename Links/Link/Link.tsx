import React, { memo } from "react";
import { DiGithubAlt } from "react-icons/di";
import { IoMdLink } from "react-icons/io";
import { AiOutlineCodeSandbox } from "react-icons/ai";

interface ILink {
  id: number;
  name: string;
  url: string;
}

interface IProps {
  link: ILink;
}

const logoSize = 25;

export default memo(({ link }: IProps) => {
  console.log("MEMO Link RENDERING");

  const switchLogo = () => {
    console.log(link.name);
    switch (link.name) {
      case "github":
        return <DiGithubAlt size={logoSize} />;
      case "codesandbox":
        return <AiOutlineCodeSandbox size={logoSize} />;

      default:
        return <IoMdLink size={logoSize} />;
    }
  };

  return (
    <div className="Link" key={link.id}>
      <a href={link.url}>
        <div className="Link__logo">{switchLogo()} </div>
        <div className="Link__name">{link.name} </div>
      </a>
    </div>
  );
});
