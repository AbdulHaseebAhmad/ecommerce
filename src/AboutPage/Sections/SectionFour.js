import React from 'react'
import classes from "../CSS/sectionFour.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import SectionFourCard from '../Components/SectionFourCard';
import cardsArray from "../../Data/aboutUsSectionFourCard.json";

export default function SectionFour() {
  return (
    <div className={classes.sectionFourContainer}>
        <div className={classes.sectionFourContentHolder}>
            <div className={classes.titleContainer}>
                <div className={classes.titleHolder}>
                    <h3 className={classes.title}>
                        Our <span> Team</span>
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
            <div className={classes.cardsContainer}>
                <div className={classes.cardsHolder}>
                    {
                        cardsArray.map((eachCard) => {
                            return <SectionFourCard key={eachCard.name} name={eachCard.name} position={eachCard.position} imgUrl={eachCard.imgUrl}/>
                        })
                    }

                </div>
            </div>
        </div>
    </div>
  )
}
