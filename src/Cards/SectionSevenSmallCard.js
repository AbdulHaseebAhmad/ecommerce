import React,  {useState}  from 'react'
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import classes from "../CSS/sectionSeven.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SectionSixPortal from '../Portals/SectionSixPortal';
import ReactDOM from 'react-dom';

export default function SectionSevenSmallCard() {
  return (
    <div className={classes.centerTopLeft}>
        <div className={classes.tag} style={{top:'5px',left:'115px',width:'70px'}}></div>
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
    </div>
  )
}
