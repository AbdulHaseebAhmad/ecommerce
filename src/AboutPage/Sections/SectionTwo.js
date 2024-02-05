import React from 'react'
import classes from "../CSS/sectionTwo.module.css";

export default function SectionTwo() {
  return (
    <div className={classes.sectionTwoContainer}>
        <div className={classes.sectionTwoContentHolder}>
            <div className={classes.leftContainer}>
                <div className={classes.leftContentHolder}>
                    <div className={classes.imgContainer}>
                        <div className={classes.imgHolder}>
                            <div className={classes.frame}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.rightContentHolder}>
                    <div className={classes.titleContainer}>
                        <div className={classes.titleHolder}>
                            <h3 className={classes.title}>ABOUT <span>US</span></h3>
                        </div>
                    </div>

                    <div className={classes.textContainer}>
                        <div className={classes.textHolder}>
                            <p className={classes.paragraph}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when 
                                looking at its layout. Lorem Lorem The point of using Lorem Ipsum is that it has a more-or-less normal 
                                distribution of letters, as opposed to using 'Content here, content here', <br/><br/>
                                making it look like readable English. Many desktop publishing packages and web page editors now use 
                                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                 in their infancy. Various versions have evolved over the years,
                            </p>
                        </div>
                    </div>

                    <div className={classes.buttonContainer}>
                        <div className={classes.buttonHolder}>
                            <button className={classes.button}>
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
