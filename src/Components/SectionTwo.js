import React, {useEffect} from 'react'
import classes from "../CSS/sectionTwo.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import SectionTwoCard from '../Cards/SectionTwoCard';

export default function SectionTwo() {

    
    const arrayOfBikes = [
        {
            name:'Mount XNX J058 FT',
            price:"$730",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/2.png'
        }, 
        {
            name:'Mount PIL K069 ST',
            price:"$1230",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/3.png'
        }, 
        {
            name:'Mount POW C058 FG',
            price:"$400",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/1.png'
        },   



]

  return (
    <div className={classes.sectionTwoOutterContainer}>
        
        <div className={classes.titleContainer}>
            <div className={classes.titleHolder}>
                <h3>
                    <span>FEATURED </span>
                    PRODUCTS
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
                    {arrayOfBikes.map((eachBike)=>{return <SectionTwoCard name={eachBike.name} price={eachBike.price} imgUrl={eachBike.imgUrl} key={eachBike.price}/> })}
            </div>
        </div>

    </div>
  )
}
