import React from 'react'
import classes from "../CSS/sectionThree.module.css";
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SectionThreeCard({name,price,imgUrl,reviews}) {

    const {averageRating} = reviews;
    
  return (
    <div className={classes.sectionThreeCard}>
        <div className={classes.sectionThreeCardHolder}>
            <div className={classes.cardImgContainer}>
                <div className={classes.cardImgHolder} style={{backgroundImage:`url(${imgUrl})`}}></div>
            </div>
            <div className={classes.cardTextContainer}>
                <div className={classes.cardTextHolder}>
                    <div className={classes.nameHolder}>
                        <p className={classes.name}><Link to={`/products/${name}`} style={{textDecoration:'none',color:'inherit'}}>{name}</Link></p>
                    </div>
                    <div className={classes.ratingHolder}>
                        <Rating readOnly value={averageRating} size='small'/>
                    </div>
                    <div className={classes.priceHolder}>
                        <p className={classes.price}>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
