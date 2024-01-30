import React, { useEffect, useState } from "react";
import classes from "../CSS/sectionTwo.module.css";
import SideBar from "../Components/SideBar";
import SectionSixCard from "../../Cards/SectionSixCard";
 import Footer from "../../Components/Footer";
import { useSubmit } from "react-router-dom";
import {  useSelector } from "react-redux";

export default function SectionTwo({ products }) {
  ///const {products} = productsData;
  
  const [typeOfProduct, setType] = useState("bikes");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [localProducts,setLocalProducts] = useState([]);

  const submit = useSubmit();
  const toggleType = (event) => {
    setType(event.target.value);
    submit({"type":event.target.value},{method:'POST', action:'/products',encType: "application/json"})
  };

  const isFilter = useSelector(state => state.filter.filter)
  const filterValue = useSelector(state => state.filter.filterValue)

  useEffect(()=>{
    const filteredProducts = [];
    if(isFilter){
      for(const key in products){
        if(products[key].categories === filterValue){
          filteredProducts.push(products[key])
        }
      }
      setLocalProducts(filteredProducts)
    }
    else {
      setLocalProducts(products)
    }
    
  },[isFilter,filterValue,products])



  return (
    <div className={classes.sectionTwoContainer}>
      <div className={classes.sectionTwoContentHolderTop}>
        <div className={classes.sectionTwoTop}>
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={toggleType}
              value="bikes"
              style={{ color: typeOfProduct === "bikes" && "black" }}
            >
              BIKES
            </button>
          </div>
          <hr />
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={toggleType}
              value="parts"
              style={{ color: typeOfProduct === "parts" && "black" }}
            >
              PARTS
            </button>
          </div>
          <hr />
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={toggleType}
              value="male"
              style={{ color: typeOfProduct === "male" && "black" }}>
              MAN
            </button>
          </div>
          <hr />
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={toggleType}
              value="female"
              style={{ color: typeOfProduct === "female" && "black" }}>
              WOMEN
            </button>
          </div>
          <hr />
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={toggleType}
              value="accessories"
              style={{ color: typeOfProduct === "accessories" && "black" }}>
              ACCESSORIES
            </button>
          </div>
        </div>
      </div>

      <div className={classes.sectionTwoBottomContentHoler}>
        <div className={classes.sectionTwoBottom}>
          <div className={classes.sideBarHolder}>
            <SideBar />
          </div>
          <div className={classes.cardContainers}>
            <div className={classes.cardHolder}>
              {localProducts.length != 0 ? localProducts.map((eachBike) => {
                return (
                  <SectionSixCard
                    name={eachBike.name}
                    price={eachBike.price}
                    imgUrl={eachBike.img}
                    key={eachBike.id}
                    containerClass={classes.portalOutterContainerSectionTwo}
                    categories={eachBike.categories}
                    tags={eachBike.tags}
                    description={eachBike.description}
                  />
                );
              }): <div className={classes.errorMessage}><p>There Are No Products To Show</p></div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
