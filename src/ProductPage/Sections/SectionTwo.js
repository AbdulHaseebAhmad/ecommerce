import React, { useState } from "react";
import classes from "../CSS/sectionTwo.module.css";
import SideBar from "../Components/SideBar";
import SectionSixCard from "../../Cards/SectionSixCard";
 import Footer from "../../Components/Footer";
import { useSubmit } from "react-router-dom";

export default function SectionTwo({ products }) {
  ///const {products} = productsData;
  
  const [typeOfProduct, setType] = useState("bikes");

  const submit = useSubmit();

  const toggleType = (event) => {
    setType(event.target.value);
    submit({"type":event.target.value},{method:'POST', action:'/products',encType: "application/json"})
  };

  const filterProducts = (filterProperty) => {
      
  }


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
              {products.length != 0 ? products.map((eachBike) => {
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
                    filter={filterProducts}
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
