import React from 'react'
import classes from "../CSS/sectionThree.module.css";
import {Icon} from '@mui/material';



export default function SectionThreeCard({title,imgUrl,text}) {

  return (
    <div className={classes.sectionThreeCard}>
        <div className={classes.cardContetnContainer}>
            <div className={classes.imgContainer}>
                <div className={classes.imgHolder}>
                    <Icon sx={{color:'black',fontSize:'50px',margin:'0px','&:hover':{cursor:'pointer',color:'peru'}}} >{imgUrl}</Icon>
                </div>
            </div>
            
            <div className={classes.titleContainer}>
                <div className={classes.titleHolder}>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
