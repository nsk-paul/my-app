import React from 'react'

import classes from './Card.module.css'
//props.children is special which evert component receive from default

function Card(props) {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  )
}

export default Card