import React from 'react'
import SectionOne from '../AboutPage/Sections/SectionOne';
import SectionTwo from '../AboutPage/Sections/SectionTwo';
import SectionThree from '../AboutPage/Sections/SectionThree';
import SectionFour from '../AboutPage/Sections/SectionFour';
import SectionNine from "../Components/SectionNine";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionNine/>
        <Footer/>
    </div>
  )
}
