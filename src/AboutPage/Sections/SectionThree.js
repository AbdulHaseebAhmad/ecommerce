import React from 'react'
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import classes from "../CSS/sectionThree.module.css";
import cardsAray from "../../Data/aboudUsCards.json";
import SectionThreeCard from '../Components/SectionThreeCard';

export default function SectionThree() {
  return (
    <div className={classes.sectionThreeContainer}>
        <div className={classes.sectionThreeContentHolder}>
            <div className={classes.titleContainer}>
                <div className={classes.titleHolder}>
                    <h3 className={classes.title}>
                        WHY <span>CHOOSE</span> US
                    </h3>
                </div>
                <div className={classes.titleDecortationHolder}>
                    <hr/>
                    <div className={classes.iconContainer}>
                    <TungstenOutlinedIcon/>
                    </div>
                    
                    <hr/>
                </div>
            </div>
            <div className={classes.bannerContainer}>
                <div className={classes.bannerHolder}></div>
            </div>
            <div className={classes.cardsContainer}>
                <div className={classes.cardsHolder}>
                    {cardsAray.map(eachCard=><SectionThreeCard key={eachCard.title} imgUrl={eachCard.imgUrl}  title={eachCard.title}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}
