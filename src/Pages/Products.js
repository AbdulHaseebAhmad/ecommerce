import React, { useEffect, useState } from 'react'
import SectionOne from '../ProductPage/Sections/SectionOne'
import SectionTwo from '../ProductPage/Sections/SectionTwo'
import productsData from "../Data/mockaroodb.json";
import { json, useActionData, useRouteLoaderData } from 'react-router';

export default function Products() {  

  const [products,setProducts] = useState([]);

  const data = useRouteLoaderData('products');
  const actionData = useActionData();

  
  useEffect(()=>{
      if(actionData === undefined){
        setProducts(data);
      }
      if(actionData){
        setProducts(actionData)
      }
  },[data,actionData])

  return (
    <div>
      <SectionOne/>
      <SectionTwo products={products}/>
    </div>
  )
}

export const loader = async () => {

  let localProductsArray = [];
  
  for(const eachProduct in productsData){
    localProductsArray.push(productsData[eachProduct])}
  return localProductsArray;
}

export const action = async ({request,params}) => {
    const data = await request.json();
    const type =  data.type;
    let localProductsArray = [];

    for (const eachProduct in productsData){
      if(productsData[eachProduct].gender === type ){
        localProductsArray.push(productsData[eachProduct]);
      }
      if(type === 'bikes') {
        localProductsArray.push(productsData[eachProduct])
      }
      if(type === 'parts' || type === 'accessories'){
        localProductsArray = [];
      }
    }
    return  localProductsArray;
} 