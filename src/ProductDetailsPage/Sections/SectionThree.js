import React, {useEffect,useState} from 'react'
import classes from "../CSS/sectionThree.module.css";
import SectionThreeCard from '../Components/SectionThreeCard';
import { useParams, useRouteLoaderData } from 'react-router';

export default function SectionThree({bikeDetails}) {

    const {productId} = useParams();
    const [showTab, setShowTab] = useState('Related Product');
    const [proucts,setProducts] = useState([]);
    const relatedProducts = useRouteLoaderData('products');

    const toggleTabs = (event) => {
        setShowTab(event.target.value);}

    useEffect(()=>{
        let localRelatedProducts = [];
        for(const key in relatedProducts){
            if(relatedProducts[key].categories === bikeDetails.categories && relatedProducts[key].id !== bikeDetails.id){
                localRelatedProducts.push(relatedProducts[key])
            }
        }
        setProducts(localRelatedProducts);
        window.scrollTo({ top: 0, behavior: 'smooth' });

    },[productId])
    
  return (
    <div className={classes.sectionThreeContainer}>
        <div className={classes.sectionThreeHolder}>
            <div className={classes.detailNavContainer}>
                <div className={classes.detailsNav}>
                    <div className={classes.buttonContainer} style={{}}>
                        <button className={classes.button} value={'Related Product'} onClick={toggleTabs} style={{borderBottom:showTab === 'Related Product'? '1px solid black': 'none',color:showTab === 'Related Product'? 'rgb(27,27,27)': 'rgb(194, 194, 194)',}}>Related Product</button>
                    </div>
                </div>
            </div>
            <div className={classes.cardsContainer}>
                <div className={classes.cardsHolder}>
                    {proucts.map((eachProduct)=>{return <SectionThreeCard imgUrl={eachProduct.img} name={eachProduct.name} price={eachProduct.price} key={eachProduct.id} reviews={eachProduct.reviews}/>})}
                </div>
            </div>
        </div>
    </div>
  )
}
