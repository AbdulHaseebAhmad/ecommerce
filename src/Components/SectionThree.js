import React from 'react'
import classes from "../CSS/sectionThree.module.css";

export default function SectionThree() {
  return (
    <div className={classes.sectionThreeOutterContaainer}>
        <div className={classes.sectionThreeTop}>
         
            <div className={classes.sectionThreeTopLeft}>
                <div className={classes.sectionThreeLeftTopTextContainer}>
                    <h5>For Summer Ride</h5>
                    <h4><span>SALE UP</span> 40%</h4>
                    <hr/>
                </div>
                <div className={classes.sectionThreeTopLeftCheckListContainer}>
                    <ul className={classes.unOrderedList}>
                        <li>With Ful Custom Accessories</li>
                        <li>Power Booster Gamming GPS Support</li>
                        <li>Tube Less Tyre For Batter Riding</li>
                        <li>Capable Strong Tire & Metal Body</li>
                    </ul>
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.button}>SHOP NOW</button>
                </div>
            </div>

            <div className={classes.sectionThreeTopRight}>
                <div className={classes.sectionThreeImageHolder}>
                    
                </div>
            </div>
        </div>
        <div className={classes.sectionThreeBottom}></div>
    </div>
  )
}
