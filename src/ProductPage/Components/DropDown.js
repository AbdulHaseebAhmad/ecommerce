import React, { useState } from 'react'
import classes from "../CSS/sideBar.module.css";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

export default function DropDown({filterName,filterOptions}) {
    
    const [showDropDown,setShowDropDown] = useState(null);
    const [filterArray, setFilterArray] = useState([]);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }


  return (
    <div className={classes.dropDownContainer} style={{flexDirection:showDropDown ? "column" : 'row',}}>
        <div className={classes.arrow} onClick={toggleDropDown}>
            <ArrowDropDownCircleOutlinedIcon/>
        </div>
        <div className={classes.LabelContainer} onClick={toggleDropDown}>
            <div className={classes.labelHolder}>
                <p>{filterName}</p>
            </div>
        </div>
        <div className={classes.dropDownSelect}  style={{display:showDropDown ? "block" : 'none'}}>
            <div className={classes.optionsHolder}>
                {filterOptions.map((eachOption) => {return <div className={classes.dropDownOption} key={eachOption} onClick={toggleDropDown}>
                    <p>{eachOption}</p>
            </div>})}
                
            </div>
        </div>
    </div>
  )
}
