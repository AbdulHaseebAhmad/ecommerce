import React from 'react'
import classes from "../CSS/sectionSix.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SectionSixCard from '../Cards/SectionSixCard';

export default function SectionSix() {

    const arrayOfHelmets = [
        {
            name:'Mount XNX J058 FT',
            price:"$730",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/b1.png'
        }, 
        {
            name:'Mount PIL K069 ST',
            price:"$1230",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/b1.png'
        }, 
        {
            name:'Mount POW C058 FG',
            price:"$400",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/b1.png'
        },   
        {
            name:'Mount XNX J058 FT',
            price:"$730",
            imgUrl:'https://template.hasthemes.com/rideo/rideo/img/products/b1.png'
        }, ]



  return (  
    <div className={classes.sectionSixOutterContainer}>
        <div className={classes.sectionSixTop}>
            <div className={classes.sectionSixTitleContainer}>
                <div className={classes.sectionSixTitleHolder}>
                    <h3>
                        <span>BEST </span> SELL
                    </h3>
                </div>
            </div>

            

            <div className={classes.textSecondaryContainer}>

                <div className={classes.decoration}>
                    <hr/>
                    <TungstenOutlinedIcon sx={{width:'30px',height:'30px'}}/>
                    <hr/>                
                </div>
                <div className={classes.paraContainer}>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.
                    </p>
                </div>
            </div>

        </div>

        <div className={classes.cardsOutterContainer}>
            <div className={classes.cardsContainerTop}>
                <div className={classes.navHolder}>
                    <button>BIKES</button>
                    <hr/>
                    <button>PARTS</button>
                    <hr/>
                    <button>MAN</button>
                    <hr/>
                    <button>WOMEN</button>
                    <hr/>
                    <button>ACCESSORIES</button>
                </div>
            </div>
        </div>

        <div className={classes.sectionSixCardContainer}>
            <div className={classes.sectionSixCardHolder}>
                {arrayOfHelmets.map((eachBike)=>{return <SectionSixCard name={eachBike.name} price={eachBike.price} imgUrl={eachBike.imgUrl} key={eachBike.price}/> })}
            </div>
        </div>
    </div>
  )
}
