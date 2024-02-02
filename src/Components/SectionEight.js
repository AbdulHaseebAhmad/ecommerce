import React from 'react'
import classes from "../CSS/sectionEight.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import SectionEightCard from '../Cards/SectionEightCard';

export default function SectionEight() {
  return (
    <div className={classes.blogSectionOutterContainer}>
        <div className={classes.titleContainer}>
            <div className={classes.titleHolder}>
                <h3>
                    <span>FROM </span>
                    BLOG
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

        <div className={classes.cardsContainer}>
            <div className={classes.cardsHolder}>
                    <SectionEightCard title='From Dirt To Glory' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/1.jpg'/>
                    <SectionEightCard title='Life Starts at 60mph' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/2.jpg' orderImg='1' orderText='0'/>
                    <SectionEightCard title='Rev it!' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/3.jpg'/>
            </div>
        </div>
    </div>
  )
}
