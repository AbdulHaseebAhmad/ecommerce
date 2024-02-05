import React from 'react'
import MainNavbar from "../../Components/MainNavbar";
import classes from "../CSS/sectionOne.module.css";
import TopContactNav from "../../Components/TopContactNav";

export default function SectionOne() {
  return (
    <div className={classes.sectionOneContainer}>
        <TopContactNav/>
        <div className={classes.sectionOneContent}>
            <MainNavbar/>
        </div>
    </div>
  )
}
