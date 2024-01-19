import React from 'react'
import classes from "../CSS/topContactNav.module.css";
import EdgesensorHighOutlinedIcon from '@mui/icons-material/EdgesensorHighOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

export default function TopContactNav() {
  return (
    <div className={classes.topNavOuterContainer}>
            <div className={classes.secondaryContiner}>

                <div className={classes.leftContainer} >
                
                    <div className={classes.phoneContainer}>
                        <div className={classes.iconHolder}>
                            <EdgesensorHighOutlinedIcon/>
                        </div>
                        <div className={classes.textContainer}>
                            <p className={classes.contactParagraph}>
                                +90 552 738 9901
                            </p>
                        </div>
                    </div>
                    
                    <div className={classes.emailContainer}>
                        <div className={classes.iconHolder}>
                            <MarkunreadOutlinedIcon/>
                        </div>
                        <div className={classes.textContainer}>
                            <p className={classes.contactParagraph}>
                                abdull.haseebkhan@gmail.com
                            </p>
                        </div>
                    </div>

                </div>

                
                <div className={classes.rightContainer}>
                    <div className={classes.accountContainer}>
                        <div className={classes.iconHolder}>
                                <Person2OutlinedIcon/>
                        </div>
                        <div className={classes.textContainer}>
                                <p className={classes.contactParagraph}>
                                    Account
                                </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
