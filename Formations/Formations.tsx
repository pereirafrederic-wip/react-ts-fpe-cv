import React, { memo } from 'react'
import data from './data.json';
import Formation from './Formation/Formation'

interface IProps {
 }

export default memo((props: IProps) => {
  console.log("MEMO Formations RENDERING");

  return (
    <div className=" Formations">
<div className="title">
{data.map(formation => <Formation formation={formation} />)}
</div>


    </div>
  );
});