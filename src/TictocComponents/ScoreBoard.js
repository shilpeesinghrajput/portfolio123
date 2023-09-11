import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores,xPlaying}) => { //wo classname ke andar ka logic chl nhi rha
          const {xScore,oScore}=scores
          
  return (
    <div className='scoreboard'>
          
          <span className={`score x-score ${!xPlaying && "inactive"}`}>X-{xScore}</span>
          <span className={`score o-score ${xPlaying && "inactive"}`}>O-{oScore}</span>
      
    </div>
  )
}
//nhi theek kro mere saamne ....chekwinner ke logic mai galti ki ha tumneok
export default ScoreBoard;
