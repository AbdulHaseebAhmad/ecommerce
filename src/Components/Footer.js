import React from 'react'
import classes from "../CSS/footer.module.css";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import EdgesensorHighOutlinedIcon from '@mui/icons-material/EdgesensorHighOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

export default function Footer() {
  return (
    <div className={classes.footerContainr}>
        <div className={classes.contentHolder}>
            <div className={classes.contentLeft}>
                <div className={classes.textHolder}>
                    <p>Copyright 2024 - Powered By IDEV Turkiye</p>
                </div>
            </div>

            <div className={classes.contentCenter}>
                <div className={classes.iconContainer}>
                    <a href=''><MailOutlinedIcon /></a>
                </div>
                <div className={classes.iconContainer}>
                    <a href=''><EdgesensorHighOutlinedIcon/></a>
                </div>
                <div className={classes.iconContainer}>
                    <a href=''><LocalShippingOutlinedIcon/></a>
                </div>
                <div className={classes.iconContainer}>
                    <a href=''><ExploreOutlinedIcon/></a>
                </div>
            </div>
            <div className={classes.contentRight}>
                <div style={{backgroundImage:'url(https://template.hasthemes.com/rideo/rideo/img/footer/v1.png)'}}></div>
                <div style={{backgroundImage:'url(https://template.hasthemes.com/rideo/rideo/img/footer/v2.png)'}}></div>
                <div style={{backgroundImage:'url(https://template.hasthemes.com/rideo/rideo/img/footer/v3.png)'}}></div>
                <div style={{backgroundImage:'url(https://template.hasthemes.com/rideo/rideo/img/footer/v4.png)'}}></div>
            </div>
        </div>
    </div>
  )
}
