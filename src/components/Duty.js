import React from 'react'
import classes from './Duty.module.css'
function Duty({icon, color, content}) {
  return (
    <div className={classes.duty}>
        <span style={{color:color}}>{icon}</span>
        <p>{content}</p>
    </div>
  )
}

export default Duty