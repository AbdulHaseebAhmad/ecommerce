import React from 'react'
import classes from "../CSS/Sectionone.module.css";
import MainNavbar from '../Components/MainNavbar';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';

export default function Sectionone() {
  return (
    <div className={classes.sectionOneOuterContainer}>
        <MainNavbar/>
        <div className={classes.sectionOneTextContainer}>

                <div className={classes.textSecondaryContainer}>
                    <h1>
                        BEST CYCLING EXPERIENCE
                    </h1>
                </div>

                <div className={classes.textSecondaryContainerBottom}>
                    
                    <div className={classes.secondaryTextDecoration}>
                        <hr/>
                        <TungstenOutlinedIcon sx={{width:'30px',height:'30px'}}/>
                        <hr/>
                    </div>

                    <div className={classes.sectionOneParaGraphContainer}>
                        <p>
                            BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING
                        </p>
                    </div>

                </div>

                <div className={classes.buttonContainer}>
                    <button className={classes.button}>
                        SHOP NOW
                    </button>
                </div>
        </div>
    </div>
  )
}
