import React,  {useState}  from 'react'
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import classes from "../CSS/sectionSeven.module.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SectionSixPortal from '../Portals/SectionSixPortal';
import ReactDOM from 'react-dom';
import SectionSevenBigCard from '../Cards/SectionSevenBigCard';
import SectionSevenSmallCard from '../Cards/SectionSevenSmallCard';

export default function SectionSeven() {

    const [showActions,setShowActions] = useState(null);
    const [showPortal, setShowPortal] = useState(null);

    const toggleActions = () => {
        setShowActions(!showActions);}
    
    const togglePortal = () => {
        setShowPortal(!showPortal);
        setShowActions(false);}

  return (
    <div className={classes.sectionSevenOutterContainer}>
        <div className={classes.sectionSevenTop}>
            <div className={classes.titleContainer}>
                <div className={classes.titleHolder}>
                        <h3>
                            <span>NEW  </span> ARRIVALS
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
                        It is a long established fact that a reader will be distracted by the readable
                         content page when looking at its layout.
                    </p>
                </div>
            </div>

            <div className={classes.sectionSevenBottom}>

                
                <SectionSevenBigCard name="Mountain Bike" price="$3200" imgUrl='https://template.hasthemes.com/rideo/rideo/img/products/ssl.jpg'/>
                <div className={classes.sectionSevenCenter}>
                    <div>
                        <SectionSevenSmallCard/>
                        <SectionSevenSmallCard/>

                    </div>
                    
                    <div>
                        <SectionSevenSmallCard/>
                        <SectionSevenSmallCard/>
                    </div>
                </div>
                <SectionSevenBigCard name="Mountain Bike" price="$3200" imgUrl='https://template.hasthemes.com/rideo/rideo/img/products/ssr.jpg'/>
            </div>
        </div>
        
     </div>
  )
}
