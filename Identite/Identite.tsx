import React, { memo } from 'react'
import data from './identite.json';
import { GoPerson } from "react-icons/go";

interface IIdentiteProps {
}

export default memo((props: IIdentiteProps) => {
  console.log("MEMO Identite RENDERING");

  return (
    <div className="Identite">
      <div className="Identite__logo">
        <GoPerson size={50} />
      </div>
      <div className="Identite__civilite">
        <div className="Identite__civilite__nomprenom">{`${data.nom} ${data.prenom}`}</div>
        <div className="Identite__civilite__email">{`${data.email}`}</div>
        <div className="Identite__civilite__age">{`${data.age} ans`}</div>
      </div>

    </div>
  );
});