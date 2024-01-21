import React from 'react'
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import classes from "../CSS/sectionSeven.module.css";

export default function SectionSeven() {
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
                        It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.
                    </p>
                </div>
            </div>

            <div className={classes.sectionSevenBottom}>
                <div className={classes.sectionSevenLeft}>
                    <div className={classes.tag}></div>
                    <div className={classes.smallCardtextContainer}>
                        <div className={classes.nameContainer}>
                            <h3>Mountain Bike</h3>
                        </div>
                        <div className={classes.priceContainer}>
                            <p>Price: </p>
                            <p>$3200 </p>
                            <p style={{textDecoration:'line-through'}}>$5000 </p>
                        </div>
                    </div>
                </div>
                <div className={classes.sectionSevenCenter}>
                    <div>
                        <div className={classes.centerTopLeft}>
                            <div className={classes.tag} style={{top:'5px',left:'115px',width:'70px'}}></div>
                            <div className={classes.smallCardtextContainer}>
                                <div className={classes.nameContainer}>
                                    <h3>Mountain Bike</h3>
                                </div>
                                <div className={classes.priceContainer}>
                                    <p>Price: </p>
                                    <p>$3200 </p>
                                    <p style={{textDecoration:'line-through'}}>$5000 </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.centerTopRight}>
                            <div className={classes.tag} style={{top:'5px',left:'115px',width:'70px'}}></div>
                            <div className={classes.smallCardtextContainer}>
                                <div className={classes.nameContainer}>
                                    <h3>Mountain Bike</h3>
                                </div>
                                <div className={classes.priceContainer}>
                                    <p>Price: </p>
                                    <p>$3200 </p>
                                    <p style={{textDecoration:'line-through'}}>$5000 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className={classes.centerBottomLeft}>
                            <div className={classes.tag} style={{top:'5px',left:'115px',width:'70px'}}></div>
                            <div className={classes.smallCardtextContainer}>
                                <div className={classes.nameContainer}>
                                    <h3>Mountain Bike</h3>
                                </div>
                                <div className={classes.priceContainer}>
                                    <p>Price: </p>
                                    <p>$3200 </p>
                                    <p style={{textDecoration:'line-through'}}>$5000 </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.centerBottomRight}>
                             <div className={classes.tag} style={{top:'5px',left:'115px',width:'70px'}}></div>                        
                            <div className={classes.smallCardtextContainer}>
                                <div className={classes.nameContainer}>
                                    <h3>Mountain Bike</h3>
                                </div>
                                <div className={classes.priceContainer}>
                                    <p>Price: </p>
                                    <p>$3200 </p>
                                    <p style={{textDecoration:'line-through'}}>$5000 </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className={classes.sectionSevenRight}>
                    <div className={classes.tag}></div>
                    <div className={classes.smallCardtextContainer}>
                        <div className={classes.nameContainer}>
                            <h3>Mountain Bike</h3>
                        </div>
                        <div className={classes.priceContainer}>
                            <p>Price: </p>
                            <p>$3200 </p>
                            <p style={{textDecoration:'line-through'}}>$5000 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}
