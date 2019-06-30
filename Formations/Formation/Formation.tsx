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
    <div className="Formation">
      <div className="title">
        {`du ${formation.debut} au ${formation.fin}`}
        {`${formation.intitule} - ${formation.definition}`}
        {formation.lieu}
      </div>
    </div>
  );
});