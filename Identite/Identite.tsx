import React, { memo } from 'react'
import data from './data.json';
import { GoPerson } from "react-icons/go";
 import moment from 'moment';

interface IProps {
}

export default memo((props: IProps) => {
  console.log("MEMO Identite RENDERING");

  return (
    <div className="tile Identite">

      <div className="tile is-20 is-parent">
        <div className="tile is-3 is-child Identite__logo">
          <GoPerson size={50} />
        </div>
        <div className="tile is-7 is-child Identite__civilite">
          <div className="Identite__civilite__nomprenom">{`${data.nom} ${data.prenom}`}</div>
          <div className="Identite__civilite__email">{`${data.email}`}</div>
          <div className="Identite__civilite__age">{`${moment().diff(data.dateNaissance, 'year')} ans`}</div>
        </div>
      </div>
      <div className="tile is-10 is-parent Identite__titre">
        <div className="tile is-child ">{data.titre}</div>
      </div>

    </div>
  );
});