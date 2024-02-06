import React, {  useState } from "react";
import classes from "../CSS/sectionSix.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SectionSixPortal from "../Portals/SectionSixPortal";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
export default function SectionSixCard({
  name,
  price,
  imgUrl,
  containerClass,
  toggleLayOver,
  description,
  tags,
  categories,
}) {
  const [showActions, setShowActions] = useState(false);
  const [showPortal, setShowPortal] = useState(null);
  const dispatch = useDispatch();

  
  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const togglePortal = () => {
    setShowPortal(!showPortal);
    setShowActions(false);
  };

  const addProductToCart = () => {
    dispatch(cartActions.addProductToCart({name,price,imgUrl,quantity:1}));
  }
  return (
    <div
      className={classes.sectionSixCard}
      style={{ backgroundImage: `url(${imgUrl})` }}
      onMouseEnter={toggleActions}
      onMouseLeave={toggleActions}
    >
      {showActions && (
        <div className={classes.actionContainer}>
          <div className={classes.actionHolder}>
            <div className={classes.addToCart} onClick={addProductToCart}>
              <ShoppingCartOutlinedIcon />
            </div>
            <div className={classes.addToFavourites}>
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className={classes.viewProduct} onClick={togglePortal}>
              <VisibilityOutlinedIcon />
            </div>
          </div>
        </div>
      )}

      <div className={classes.textContainer}>
        <div className={classes.bikeNameHolder}>
          <h5><Link to={`/products/${name}`} style={{textDecoration:'none', color:'inherit'}}>{name}</Link></h5>
        </div>
        <div className={classes.bikePriceHolder}>
          <p>
            Price: <span> {price}</span>{" "}
            <span style={{ textDecoration: "line-through", color: "black" }}>
              $1500
            </span>
          </p>
        </div>
      </div>
      {showPortal &&
        ReactDOM.createPortal(
          <SectionSixPortal
            closePortal={togglePortal}
            name={name}
            price={price}
            imgUrl={imgUrl}
            customClass={
              containerClass === undefined
                ? classes.portalOutterContainerSectionSix
                : containerClass
            }
            description={description}
            tags={tags}
            categories={categories}
          />,
          document.getElementById("portal-root")
        )}
    </div>
  );
}
