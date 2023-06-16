import React from 'react'
import classes from './Loader.module.css'


const Loader = () => {
  return (
    <div>
      <svg className={classes.Mysvg} width="200" height="200" viewBox="0 0 100 100">
        <polyline className={classes.strokeStill} points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className={classes.strokeStill} points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className={classes.strokeAnimation} points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className={classes.strokeAnimation} points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
    </svg>
    </div>
  )
}

export default Loader
