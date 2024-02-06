import React from 'react'
import classes from '../CSS/layover.module.css';
import { Icon } from '@mui/material';
export default function LayOver({children}) {

   
  return (
    <div className={classes.LayOverContainer}>
        <div className={classes.iconContainer}>
          <div className={classes.iconHolder} style={{color:'#fd7e14'}}>
            <Icon sx={{color:'#fd7e14', '&:hover':{cursor:'pointer',fontSize:'30px'}}}>close</Icon>
          </div>
        </div>
        <div className={classes.LayOverHolder}>
            {children}
        </div>
    </div>
  )
}
