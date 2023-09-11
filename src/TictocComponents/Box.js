import React from 'react'
import './Box.css'

const Box = ({ value , onClick}) => {
          const style = value ==="x" ?"box x" :"box o"
  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Box
