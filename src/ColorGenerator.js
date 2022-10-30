import React from 'react';
import classes from './ColorGenerator.module.css';
import table from './ColorTable';


const ColorGenerator = (props) => {

    const handleColorChange = (e) => {
        const value = e.target.value;
        const colorHEX = table(value);
        props.getColor(value);
        props.getHEX(colorHEX);
    }

    return (
            <div className={classes.box}>
                <label className={classes.labelBox}>Color</label>
                <input className={classes.inputBox} type='text' onChange={handleColorChange}></input>
            </div>
    )
}


export default ColorGenerator;