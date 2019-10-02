import React from 'react';

import classes from './Label.module.css';



const Label = (props) => {

    return (
            <div className="Label">{props.value}</div>

            )
}


export default Label