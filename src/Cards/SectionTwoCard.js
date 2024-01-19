import React from 'react'
import classes from "../CSS/sectionTwo.module.css";

export default function SectionTwoCard({name,price, imgUrl}) {
  return (
    <div className={classes.sectionTwoCard} style={{backgroundImage:`url(${imgUrl})`}}>
        <div className={classes.textContainer}>
            <div className={classes.bikeNameHolder}>
                <h5>{name}</h5>
            </div>
            <div className={classes.bikePriceHolder}>
                <p>
                    Price <span>  {price}</span>
                </p>
            </div>
        </div>
    </div>
  )
}
