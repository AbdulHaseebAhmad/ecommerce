import React, {useEffect, useState} from 'react';
import classes from "../CSS/sideBar.module.css";
import DropDown from './DropDown';
import filterData from "../../Data/filters.json";
import { filterActions } from '../../store/filter-slice';
import { UseDispatch, useDispatch } from 'react-redux';
export default function SideBar() {

    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();
    const {filters} = filterData; 

    useEffect(()=>{
        const localFilter = [];
        for(const key in filters){
            localFilter.push({filterName:key, filterOptions:Object.values(filters[key])});}
        setFilter(localFilter);
    },[])

    const filterProducts = () => {
        dispatch(filterActions.filterProducts())
    }
    
    const unFilterProducts = () => {
        dispatch(filterActions.unFilterProducts())
    }

  return (
    <div className={classes.sideBarContaine}>
        <div className={classes.sideBarContentHolder}>
            <div className={classes.dropDownHolder}>
            <div className={classes.buttonsContainer}>
                <button onClick={filterProducts}>Search</button>
                <button onClick={unFilterProducts}>Clear Filters</button>
            </div>
            {filter.map((eachFilter) => 
                {return <DropDown key={eachFilter.filterName} 
                        filterName={eachFilter.filterName} 
                        filterOptions={eachFilter.filterOptions}/>})}
                
            </div>
        </div>
    </div>
  )
}
