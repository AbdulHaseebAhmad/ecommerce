import React from 'react'
import classes from "../CSS/sectionSix.module.css";

export default function SectionSixPortal() {
  return (
    <div className={classes.portalOutterContainer}>

        <div className={classes.portalLeft}>
            <div className={classes.imgContainer}>
                <div className={classes.ImageHolder}></div>

                </div>
        </div>

        <div className={classes.portalRight}>
            <div className={classes.portalTop}>
                <div className={classes.textHolder}>
                    <div className={classes.titleContainer}>
                        <h1>GT Sensor Carbon Jenson</h1>
                    </div>
                    <div className={classes.priceContainer}>
                        <p>$1700.00</p>
                    </div>
                </div>

            </div>
            <div className={classes.portalCenter}>
                <div className={classes.textHolder}>
                    <div className={classes.descriptionContainer}>
                        <p>
                        doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; 
                        est usus legentis in iis qui facit eorum claritatem.
                        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                        </p>
                    </div>
                </div>

            </div>
            <div className={classes.portalBottom}>
                <div className={classes.bottomTextContainer}>
                    <div className={classes.categoriesContainer}>
                        <p>CATEGORIES:</p>
                        <ul>
                            <li>Bike</li>
                            <li>Cycle</li>
                            <li>Mountain</li>
                            <li>Ride</li>
                        </ul>
                    </div>
                    <div className={classes.tagContainers}>
                        <p>TAG:</p>
                        <ul>
                            <li>Bike</li>
                            <li>Cycle</li>
                            <li>Mountain</li>
                            <li>Ride</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
