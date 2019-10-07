import React from 'react';

import classes from './Area.module.css'


const Area = (props) => {
    return (
        <textarea
            rows="3"
            className={classes.TextArea}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            onBlur={props.handleOnBlur}
            onFocus={props.handleOnFocus}
        >
            {props.value}
        </textarea>
    )
}


export default Area
