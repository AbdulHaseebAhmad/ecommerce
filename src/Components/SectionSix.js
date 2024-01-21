import React, { useState } from 'react'
import classes from "../CSS/sectionSix.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SectionSixCard from '../Cards/SectionSixCard';
import productsData from "../Data/SectionSixProductsData.json";



export default function SectionSix() {

    const {products} = productsData;
    const [typeOfProduct, setType] = useState("bikes");
        
    const toggleType = (event) => {
        setType(event.target.value);}



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
                        It is a long established fact that a reader will be distracted by the 
                        readable content page when looking at its layout.
                    </p>
                </div>
            </div>

        </div>

        <div className={classes.cardsOutterContainer}>
            <div className={classes.cardsContainerTop}>
                <div className={classes.navHolder}>
                    <button onClick={toggleType} value='bikes' style={{color:typeOfProduct === 'bikes' && "black"}}>BIKES</button>
                    <hr/>
                    <button onClick={toggleType} value='parts' style={{color:typeOfProduct === 'parts' && "black"}}>PARTS</button>
                    <hr/>
                    <button onClick={toggleType} value='men' style={{color:typeOfProduct === 'men' && "black"}}>MAN</button>
                    <hr/>
                    <button onClick={toggleType} value='women' style={{color:typeOfProduct === 'women' && "black"}}>WOMEN</button>
                    <hr/>
                    <button onClick={toggleType} value='accessories' style={{color:typeOfProduct === 'accessories' && "black"}}>ACCESSORIES</button>
                </div>
            </div>
        </div>

        <div className={classes.sectionSixCardContainer}>
            <div className={classes.sectionSixCardHolder}>
                {products[typeOfProduct].map((eachBike)=>{return <SectionSixCard name={eachBike.name} price={eachBike.price} imgUrl={eachBike.imgUrl} key={eachBike.price}/> })}
            </div>
        </div>

       
    </div>
  )
}
