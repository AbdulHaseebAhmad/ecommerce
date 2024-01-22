import React from 'react'
import classes from "../CSS/sectionNine.module.css";


export default function SectionNine() {
  return (
    <div className={classes.sectionNineConainer}>
        <div className={classes.contentHolderTop}>
            <div style={{backgroundImage:"url(https://template.hasthemes.com/rideo/rideo/img/brand/1.png)"}}></div>
            <div style={{backgroundImage:"url(https://template.hasthemes.com/rideo/rideo/img/brand/2.png)"}}></div>
            <div style={{backgroundImage:"url(https://template.hasthemes.com/rideo/rideo/img/brand/3.png)"}}></div>
            <div style={{backgroundImage:"url(https://template.hasthemes.com/rideo/rideo/img/brand/4.png)"}}></div>
            <div style={{backgroundImage:"url(https://template.hasthemes.com/rideo/rideo/img/brand/5.png)"}}></div>
        </div>
        <div className={classes.contentContainerBottom}>
            <div className={classes.contentHolderBottom}>
                <div className={classes.logoHolder}></div>
                <div className={classes.paraContainer}>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
