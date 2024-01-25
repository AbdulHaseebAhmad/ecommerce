import React, {useEffect, useState} from 'react';
import classes from "../CSS/sideBar.module.css";
import DropDown from './DropDown';
import filterData from "../../Data/filters.json";

export default function SideBar() {

    const [filter, setFilter] = useState([]);
    const {filters} = filterData; 

    useEffect(()=>{
        const localFilter = [];
        for(const key in filters){
            localFilter.push({filterName:key, filterOptions:Object.values(filters[key])});}
        setFilter(localFilter);
    },[])


  return (
    <div className={classes.sideBarContaine}>
        <div className={classes.sideBarContentHolder}>
            <div className={classes.dropDownHolder}>
            {filter.map((eachFilter) => 
                {return <DropDown key={eachFilter.filterName} 
                        filterName={eachFilter.filterName} 
                        filterOptions={eachFilter.filterOptions}/>})}
                
            </div>
        </div>
    </div>
  )
}
