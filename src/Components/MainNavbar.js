import React, { useState } from 'react'
import classes from "../CSS/mainNavbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Cart from '../Portals/Cart';
import ReactDOM from "react-dom";

export default function MainNavbar() {

  const cartQuantity = useSelector(state => state.cart.numberOfItems)
  const [showModal,setShowModal] = useState(null);

  const togglePortal = () => {
    window.scrollTo({top:'20%', behavior:'smooth'})
    setShowModal(!showModal);
  }

  return (
    <div className={classes.mainNavbarOuterConatiner}>
        
        <div className={classes.logoContainer}>
            <div className={classes.logoHolder}></div>
        </div>

        <div className={classes.navLinksContainer}>
          <a href='/'>HOME</a>
          <a href='/products'>PRODUCTS</a>
          <a href='/about-us'>ABOUT</a>
          <a href='/blogs'>BLOG</a>
          <a href=''>ACCOUNT</a>
          <a href='pages'>PAGES</a>
          <a href='contact'>CONTACT</a>
        </div>

        <div className={classes.cartIconContainer}>
          <div className={classes.cartIconHolder}>
            <Badge badgeContent={cartQuantity} sx={{color:cartQuantity >0 ?'orange':null,fontSize:'20px'}} showZero>
              <ShoppingCartIcon sx={{width:'50px',height:'50px'}} onClick={togglePortal}/>
            </Badge>
          </div>
        </div>

        {showModal &&
        ReactDOM.createPortal(
          <Cart/>,
          document.getElementById("root")
        )}

    </div>

  )
}
