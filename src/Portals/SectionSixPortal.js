import React from 'react'
import classes from "../CSS/sectionSix.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function SectionSixPortal({name,imgUrl,price,closePortal,customClass,tags,categories,description}) {
    const togglePortal = () => {
        closePortal(false);
    }
  return (
    <div className={`${customClass}`}>

        <div className={classes.portalLeft}>
            <div className={classes.imgContainer}>
                <div className={classes.ImageHolder} style={{backgroundImage:`url(${imgUrl})`}}></div>

            </div>
        </div>

        <div className={classes.portalRight}>
            <div className={classes.portalTop}>
                <div className={classes.textHolder}>
                    <div className={classes.titleContainer}>
                        <h1>{name}</h1>
                    </div>
                    <div className={classes.priceContainer}>
                        <p>{price}</p>
                    </div>
                </div>

            </div>
            <div className={classes.portalCenter}>
                <div className={classes.textHolder}>
                    <div className={classes.descriptionContainer}>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>

            </div>
            <div className={classes.portalBottom}>
                <div className={classes.bottomTextContainer}>
                    <div className={classes.categoriesContainer}>
                        <p>CATEGORIES:</p>
                        <ul>
                            <li style={{width:'max-width'}}>{categories}</li>
                            
                        </ul>
                    </div>
                    <div className={classes.tagContainers}>
                        <p>TAG:</p>
                        <ul>
                            <li>{tags}</li>
                        </ul>
                    </div>
                </div>
            </div>

{/**The actionContainer below is using common classes with the actionContainer in the card component be care full while making changes */}
            <div className={classes.actionContainer}>
                <div className={classes.actionHolder} style={{ margin:'0px',justifyContent:'flex-start', gap:'20px'}}>
                    <div className={classes.addToCart}>
                        <ShoppingCartOutlinedIcon/>
                    </div>
                    <div className={classes.addToFavourites}>
                        <FavoriteBorderOutlinedIcon/>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button onClick={togglePortal}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
