import React from 'react';
import classes from './ColorInfo.module.css'

const ColorInfo = (props) => {
    return(
        <>
        <div className={classes.infoBox}>
            {props.color && <div>HEX {props.color}</div>}
        </div>
        </>
    )
}

export default ColorInfo;