import React from 'react';
import classes from './Seperator.module.css'


const Seperator = (props) => {
    return (
        <div className={classes.DivSeparator} >
            <span className={classes.Span} >
                {props.children}
            </span>
        </div>
    )
}


export default Seperator
