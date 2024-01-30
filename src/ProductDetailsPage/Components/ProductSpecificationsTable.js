import React, { useEffect, useState } from 'react'
import classes from "../CSS/productsSpecifications.module.css";

export default function ProductSpecificationsTable({specification}) {

    const [specKeys, setSpecKeys] = useState([]);
    const [specValues, setSpecValues] = useState([]);

    useEffect(()=>{
        setSpecKeys(Object.keys(specification));
        setSpecValues(Object.values(specification));
    },[specification])


  return (
    <div className={classes.specificationTable}>
        <div className={classes.contentHolder}>
            <div className={classes.titleContainer}>
                <div className={classes.titleHolder}>
                    <h5 className={classes.title}>Products Specifications</h5>
                </div>
            </div>

            <div className={classes.tableContainer}>
                <div className={classes.tableHolder}>
                    <div className={classes.col1}>
                        {specKeys.map((eachKey)=>{return <div className={classes.colLeft} key={eachKey}>{eachKey}</div>})}
                    </div>
                    <div className={classes.col2}>
                        {specValues.map((eachKey)=>{return <div className={classes.colRight} key={eachKey}>{eachKey}</div>})}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
