import React from 'react';

import classes from './Label.module.css';



const Label = (props) => {
    return (
        <label
            for={props.for}
            className={classes.Label}
        >
            {props.children}
        </label>
    )
}


export default Label