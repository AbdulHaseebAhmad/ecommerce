import React from 'react'
import classes from "../CSS/sectionFour.module.css";
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';

export default function SectionFourCard({name,position,imgUrl}) {
  return (
    <div className={classes.sectionFourCard}>
      <div className={classes.sectionFourCardHolder}>
        <div className={classes.cardImgContainer}>
            <div className={classes.cardImgHolder} style={{backgroundImage:`url(${imgUrl})`}}>
                <div className={classes.overLay}>
                  <div className={classes.overLayContent}>
                      <div className={classes.socialIconContainer}>
                        <div className={classes.socialIconHolder}>
                          <Link><Icon fontSize='large'>facebook</Icon></Link>

                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <div className={classes.cardTextContainer}>
            <div className={classes.cardTextHolder}>
                <p className={classes.name}>{name}</p>
                <p className={classes.position}>{position}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
