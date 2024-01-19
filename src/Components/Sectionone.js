import React from 'react'
import classes from "../CSS/Sectionone.module.css";
import MainNavbar from '../Components/MainNavbar';


export default function Sectionone() {
  return (
    <div className={classes.sectionOneOuterContainer}>
      <div className={classes.sectionOneSlideShowContainer}>
        <MainNavbar/>

      </div>
    </div>
  )
}
