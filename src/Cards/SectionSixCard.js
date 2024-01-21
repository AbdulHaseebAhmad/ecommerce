import React, { useState } from 'react'
import classes from "../CSS/sectionSix.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SectionSixPortal from '../Portals/SectionSixPortal';
import ReactDOM from 'react-dom';

export default function SectionSixCard({name,price,imgUrl}) {

  const [showActions,setShowActions] = useState(false);
  const [showPortal, setShowPortal] = useState(null);

  const toggleActions = () => {
    setShowActions(!showActions);
  }

  const togglePortal = () => {
    setShowPortal(!showPortal);
    setShowActions(false);

  }

  return (
    <div className={classes.sectionSixCard}  style={{backgroundImage:`url(${imgUrl})`}} onMouseEnter={toggleActions} onMouseLeave={toggleActions}>

    {
      showActions && <div className={classes.actionContainer}>
          <div className={classes.actionHolder}>
              <div className={classes.addToCart}>
                <ShoppingCartOutlinedIcon/>
              </div>
              <div className={classes.addToFavourites}>
                <FavoriteBorderOutlinedIcon/>
              </div>
              <div className={classes.viewProduct} onClick={togglePortal}>
                <VisibilityOutlinedIcon/>
              </div>
          </div>
    </div>
    }
    
    <div className={classes.textContainer}>
        <div className={classes.bikeNameHolder}>
            <h5>{name}</h5>
        </div>
        <div className={classes.bikePriceHolder}>
            <p>Price: <span>  {price}</span> <span style={{textDecoration:'line-through',color:'black'}}>$1500</span></p>
        </div>
    </div>
    {showPortal && ReactDOM.createPortal(
        <SectionSixPortal closePortal={togglePortal} name={name} price={price} imgUrl={imgUrl} customClass={classes.portalOutterContainerSectionSix}/>,
        document.getElementById("portal-root") 
      )}
</div>
  )
}
