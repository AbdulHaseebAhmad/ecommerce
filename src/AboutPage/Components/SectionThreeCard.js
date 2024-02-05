import React from 'react'
import classes from "../CSS/sectionThree.module.css";
import Icon from '@mui/material/Icon';




export default function SectionThreeCard({title,imgUrl,text}) {

  return (
    <div className={classes.sectionThreeCard}>
        <div className={classes.cardContetnContainer}>
            <div className={classes.imgContainer}>
                <div className={classes.imgHolder}>
                    <Icon variant={'rounded'} sx={{fontSize:'50px',fontWeight:'200',margin:'0px','&:hover':{cursor:'pointer',color:'peru'}}} >{imgUrl}</Icon>
                </div>
            </div>
            
            <div className={classes.cardTitleContainer}>
                <div className={classes.cardTitleHolder}>
                    <h3 className={classes.cardTitle}>{title}</h3>
                </div>
            </div>

            <div className={classes.cardTextContainer}>
                <div className={classes.cardTextHolder}>
                    <p className={classes.cardPrara}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
