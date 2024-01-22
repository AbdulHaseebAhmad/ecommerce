import React from 'react'
import TopContactNav from '../Components/TopContactNav';
import Sectionone from '../Components/Sectionone';
import SectionTwo from '../Components/SectionTwo';
import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionSix from '../Components/SectionSix';
import SectionSeven from '../Components/SectionSeven';
import SectionEight from '../Components/SectionEight';
import SectionNine from '../Components/SectionNine';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
        <TopContactNav/>
        <Sectionone/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionSix/>
        <SectionSeven/>
        <SectionEight/>
        <SectionNine/>
        <Footer/>
    </div>
  )
}
