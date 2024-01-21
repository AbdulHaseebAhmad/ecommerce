import React,  {useState}  from 'react'
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import classes from "../CSS/sectionSeven.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SectionSixPortal from '../Portals/SectionSixPortal';
import ReactDOM from 'react-dom';

export default function SectionSevenBigCard({name,price,imgUrl,closePortal}) {
    const [showActions,setShowActions] = useState(null);
    const [showPortal, setShowPortal] = useState(null);

    const toggleActions = () => {
        setShowActions(!showActions);}
    
    const togglePortal = () => {
        setShowPortal(!showPortal);
        setShowActions(false);}

  return (
    <div className={classes.sectionSevenLeft} onMouseEnter={toggleActions} onMouseLeave={toggleActions} style={{backgroundImage:`url(${imgUrl})`}}>
        <div className={classes.tag}></div>
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
        <div className={classes.smallCardtextContainer}>
            <div className={classes.nameContainer}>
                <h3>Mountain Bike</h3>
            </div>
            <div className={classes.priceContainer}>
                <p>Price: </p>
                <p>$3200 </p>
                <p style={{textDecoration:'line-through'}}>$5000 </p>
            </div>
        </div>
        {showPortal && ReactDOM.createPortal(
        <SectionSixPortal closePortal={togglePortal} name={name} price={price} imgUrl={imgUrl} customClass={classes.portalOutterContainerSectionSeven}/>,
        document.getElementById("portal-root") 
      )}
    </div>
  )
}
