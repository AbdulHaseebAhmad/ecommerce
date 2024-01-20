import React from 'react'
import classes from "../CSS/sectionFour.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import SectionFourCard from '../Cards/SectionFourCard';

export default function SectionFour() {

    const arrayOfHelmets = [
        {
            name:'Mount XNX J058 FT',
            price:"$730",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/r2.png'
        }, 
        {
            name:'Mount PIL K069 ST',
            price:"$1230",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/r3.png'
        }, 
        {
            name:'Mount POW C058 FG',
            price:"$400",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/r1.png'
        },   
        {
            name:'Mount XNX J058 FT',
            price:"$730",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/r4.png'
        }, 



]

  return (
    <div className={classes.sectionFourOutterContainer}>
        <div className={classes.sectionFourTop}>
            <div className={classes.sectionFourTitleContainer}>
                <div className={classes.titleHolder}>
                    <h3>
                        <span>RIDING  </span>
                        ACCESSORIES
                    </h3>
                </div>
            </div>

            <div className={classes.textSecondaryContainer}>

                <div className={classes.decoration}>
                    <hr/>
                    <TungstenOutlinedIcon sx={{width:'30px',height:'30px'}}/>
                    <hr/>                
                </div>
                <div className={classes.paraContainer}>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.
                    </p>
                </div>
            </div>

        <div className={classes.cardsOuterContainer}>
            <div className={classes.cardContainer}>
                    {arrayOfHelmets.map((eachBike)=>{return <SectionFourCard name={eachBike.name} price={eachBike.price} imgUrl={eachBike.imgUrl} key={eachBike.price}/> })}
            </div>
        </div>

        </div>
    </div>
  )
}
