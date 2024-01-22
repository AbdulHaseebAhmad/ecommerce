import React from 'react'
import classes from "../CSS/sectionEight.module.css";

export default function SectionEightCard({title,imgUrl,orderText, orderImg}) {
  return (
    <div className={classes.sectionEightCard}>
        <div className={classes.cardTop} style={{order:`${orderImg}`}}>
            <div className={classes.imgContainer}>
                <div className={classes.imgHolder} style={{backgroundImage:`url(${imgUrl})`}}>
                    
                </div>
            </div>
        </div>

        <div className={classes.cardBottom} style={{order:`${orderText}`}}>
            <div className={classes.cardTextContainer} >
                <div className={classes.cardTitleHolder} >
                    <h3>{title}</h3>
                </div>
                <div className={classes.cardParaHolder}>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                </div>
            </div>
        </div>

        <div className={classes.buttonContainer}>
            <button className={classes.button}>View More</button>
        </div>
    </div>
  )
}
