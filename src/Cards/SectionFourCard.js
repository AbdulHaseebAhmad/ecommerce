import React from 'react'
import classes from "../CSS/sectionFour.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function SectionFourCard({name,price,imgUrl}) {
  return (
    <div className={classes.sectionFourCard} style={{backgroundImage:`url(${imgUrl})`}}>

        <div className={classes.textContainer}>
            <div className={classes.bikeNameHolder}>
                <h5>{name}</h5>
            </div>
            <div className={classes.bikePriceHolder}>
                <p>Price <span>  {price}</span></p>
            </div>
            <div className={classes.cartContainer}>
                <ShoppingCartOutlinedIcon/>
            </div>
        </div>

</div>
  )
}
