import React, { memo } from 'react'

interface IFormationProps {
  id: number
  debut: string
  fin: string
  intitule: string
  definition: string
  lieu: string

}

interface IProps {
  formation: IFormationProps
}

export default memo(({ formation }: IProps) => {
  console.log("MEMO Formation RENDERING");

  return (
    <div className="Formation tile box is-parent is-vertical" key={formation.id}>
      <div className="subtitle">
        {`de ${formation.debut} au ${formation.fin}`}
      </div>
      <div className="title">
        {`${formation.intitule} - ${formation.definition}`}
      </div>
      <div className="subtitle">
        {formation.lieu}
      </div>
    </div>
  );
});