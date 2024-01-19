import React from 'react'
import classes from "../CSS/mainNavbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MainNavbar() {
  return (
    <div className={classes.mainNavbarOuterConatiner}>
        
        <div className={classes.logoContainer}>
            <div className={classes.logoHolder}></div>
        </div>

        <div className={classes.navLinksContainer}>
          <a href=''>HOME</a>
          <a href=''>PRODUCTS</a>
          <a href=''>ABOUT</a>
          <a href=''>SHORTCODE</a>
          <a href=''>BLOG</a>
          <a href=''>PAGES</a>
          <a href=''>CONTACT</a>
        </div>

        <div className={classes.cartIconContainer}>
          <div className={classes.cartIconHolder}>
            <ShoppingCartIcon sx={{width:'50px',height:'50px'}}/>
          </div>
        </div>



    </div>
  )
}
