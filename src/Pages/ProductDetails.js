import React from 'react'
import SectionOne from '../ProductDetailsPage/Sections/SectionOne'
import SectionTwo from '../ProductDetailsPage/Sections/SectionTwo'
import productsData from "../Data/mockaroodb.json";
import { useLoaderData } from 'react-router';

export default function ProductDetails() {

    const bikeDetails = useLoaderData();

  return (
    <div>
        <SectionOne/>
        <SectionTwo bikeDetails={bikeDetails}/>
    </div>
  )
}

export const loader = async ({request, params}) => {
    const bikeId = await params;

    let bikeDetails = '';
    for(const key in productsData){
        if(productsData[key].name === bikeId.productId){
            bikeDetails = productsData[key];
        }
    }


    return bikeDetails;
}
