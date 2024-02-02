import React, { useState } from 'react'
import classes from "../CSS/detailsComponent.module.css";
import  Rating from '@mui/material/Rating';

export default function DetailsComponent({description, reviews,productId}) {

    const [showTab, setShowTab] = useState('description');

    const toggleTabs = (event) => {
        setShowTab(event.target.value);
    }
    return (
    <div className={classes.detailContainer}>
    <div className={classes.detailHolder}>
        <div className={classes.detailNavContainer}>
            <div className={classes.detailsNav}>
                <div className={classes.buttonContainer} style={{}}>
                    <button className={classes.button} value={'description'} onClick={toggleTabs} style={{borderBottom:showTab === 'description'? '1px solid black': 'none',color:showTab === 'description'? 'rgb(27,27,27)': 'rgb(194, 194, 194)',}}>Product Description</button>
                </div>
                <div className={classes.buttonContainer} style={{}}>
                    <button className={classes.button} value={'reviews'} onClick={toggleTabs} style={{borderBottom:showTab === 'reviews'? '1px solid black': 'none',color:showTab === 'reviews'? 'rgb(27,27,27)': 'rgb(194, 194, 194)',}}>Reviews</button>
                </div>
            </div>
        </div>
        <div className={classes.detailBottomContainer}>
            <div className={classes.detailBottomHolder}>

                <div className={classes.descriptionContainer} style={{display:showTab === 'description'? 'inline-block': 'none'}}>
                    <div className={classes.descriptionHolder}>
                        <p className={classes.description}>{description}</p>
                    </div>
                </div>

                <div className={classes.reviewsContainer} style={{display:showTab === 'reviews'? 'inline-block': 'none'}}>
                    <div className={classes.reviewsHolder}>
                       { reviews.customerReviews.map((eachReview)=>{return <div className={classes.review} key={productId + eachReview.username}>
                            <div className={classes.profileImageContainer}>
                                <div className={classes.profileImg}>{eachReview.username[0].toUpperCase()}</div>
                            </div>
                            <div className={classes.reviewDetailContainer}>
                                <div className={classes.accountNameHolder}>
                                    <p className={classes.name}>{eachReview.username}</p>
                                    <div className={classes.ratingHolder}>
                                        <Rating readOnly value={eachReview.rating} size='small'/>
                                    </div>
                                </div>
                                <div className={classes.customerReviewContainer}>
                                    <p className={classes.reviewPara}>
                                        {eachReview.comment}
                                    </p>
                                </div>
                            </div>
                        </div>})}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
