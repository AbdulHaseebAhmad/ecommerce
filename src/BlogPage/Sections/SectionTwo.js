import React from 'react'
import classes from "../CSS/sectionTwo.module.css";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import SectionEightCard from '../../Cards/SectionEightCard';

export default function SectionTwo() {
  return (
    <div className={classes.sectionTwoContainer}>
        <div className={classes.sectionTwoHolder}>
            <div className={classes.blogSectionOutterContainer}>

                <div className={classes.titleContainer}>
                    <div className={classes.titleHolder}>
                        <h3>
                            <span>FROM </span>
                            BLOG
                        </h3>
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

            <hr/>            
            <div className={classes.blogSectionOutterContainer}>
                <div className={classes.cardsContainer}>
                    <div className={classes.cardsHolder}>
                            <SectionEightCard title='From Dirt To Glory' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/1.jpg'/>
                            <SectionEightCard title='Life Starts at 60mph' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/2.jpg' orderImg='1' orderText='0'/>
                            <SectionEightCard title='Rev it!' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/3.jpg'/>
                    </div>
                </div>
            </div>

            <hr/>            

            <div className={classes.blogSectionOutterContainer}>
                <div className={classes.cardsContainer}>
                    <div className={classes.cardsHolder}>
                            <SectionEightCard title='From Dirt To Glory' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/1.jpg'/>
                            <SectionEightCard title='Life Starts at 60mph' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/2.jpg' orderImg='1' orderText='0'/>
                            <SectionEightCard title='Rev it!' imgUrl='https://template.hasthemes.com/rideo/rideo/img/blog/3.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
