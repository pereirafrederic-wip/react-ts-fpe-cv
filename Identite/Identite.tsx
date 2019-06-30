import React, {memo} from 'react'
import data from './Donnees/identite.json';
interface IIdentiteProps{
}

export default memo((props: IIdentiteProps) => {
  console.log("MEMO Identite RENDERING");

  return (
    <div className="Identite">
      <div className="Identite__nom">{data.nom}</div>
      <div className="Identite__prenom">{data.prenom}</div>
      <div className="Identite__age">{data.age}</div>
    </div>
  );
});