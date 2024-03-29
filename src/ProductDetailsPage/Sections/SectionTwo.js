import React from 'react'
import classes from "../CSS/sectionTwo.module.css";
import DropDown from "../../ProductPage/Components/DropDown";
import ProductSpecificationsTable from '../Components/ProductSpecificationsTable';
import DetailsComponent from '../Components/DetailsComponent';
import  Rating from '@mui/material/Rating';
export default function SectionTwo({bikeDetails}) {

    const {description} = bikeDetails;
    console.log();
  return (
    <div className={classes.sectionTwoOutterContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.topContentContainer}>
            <div className={classes.topContainer}>
                <div className={classes.topLetContainer}>
                    <div className={classes.imgContainer}>
                        <div className={classes.imgHolder} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>
                    </div>
                    <div className={classes.slideContainer}>
                        <div className={classes.slideHolder}>
                            <div className={classes.slideImg} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>
                            <div className={classes.slideImg} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>
                            <div className={classes.slideImg} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>
                            <div className={classes.slideImg} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>
                            <div className={classes.slideImg} style={{backgroundImage:`url(${bikeDetails.img})`}}></div>

                        </div>
                    </div>
                </div>
                <div className={classes.topRightContainer}>
                    <div className={classes.rightContentContainer}>
                        <div className={classes.titleContainer}>
                            <div className={classes.titleHolder}>
                                <h3 className={classes.title}>{bikeDetails.name}</h3>
                            </div>
                            <div className={classes.priceHolder}>
                                <p className={classes.price}>{bikeDetails.price}</p>
                            </div>
                        </div>
                        <div className={classes.reviewsContainer}>
                            <div className={classes.reviewsHolder}>
                                <p className={classes.reviewsPara}>{bikeDetails.reviews.totalReviews} Total Reviews</p>
                                <Rating readOnly value={bikeDetails.reviews.averageRating}/>
                            </div>
                        </div>
                        <div className={classes.descriptionContainer}>
                            <div className={classes.descriptionHolder}>
                                <p className={classes.description}>
                                    {bikeDetails.description}
                                </p>
                            </div>
                        </div>
                        <div className={classes.categoryContainer}>
                            <div className={classes.categoryHolder}>
                                <p className={classes.fieldTitle}>CATEGORIES:  </p>
                                <p className={classes.fieldTitle}>{bikeDetails.categories}</p>
                            </div>
                            <div className={classes.tagHolder}>
                                <p className={classes.fieldTitle}>TAGS:</p>
                                <p className={classes.fieldTitle}>{bikeDetails.tags}</p>
                            </div>
                        </div>
                        <div className={classes.actionsContainer}>
                            <div className={classes.actionsHolder}>
                                <div className={classes.actionTopContainer}>
                                    <div className={classes.dropwDownContainer}>
                                        <DropDown filterName="Color" filterOptions={[bikeDetails.color]} />
                                    </div>
                                    <div className={classes.inputHolder}>
                                        <input type='number' className={classes.input} placeholder='Qtty' min={0}/>
                                    </div>
                                </div>
                                <div className={classes.actionsBottomContainer}>
                                    <div className={classes.buttonContainer}>
                                        <button className={classes.button}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.specificationTableHolder}>
                            <ProductSpecificationsTable specification={bikeDetails.productSpecifications} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.centerContentContainer}>
            <div className={classes.centerContentHolder}>
                <DetailsComponent description={description} reviews={bikeDetails.reviews} productId={bikeDetails.id}/>
            </div>
        </div>
      </div>
    </div>
  )
}
