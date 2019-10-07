import React from 'react';
import classes from './ButtonClear.module.css';

import { Icon } from 'semantic-ui-react'

const ButtonClear = (props) => {
    const allClasses = [classes.ButtonClear, "button-clear"].join(' ')
    const icone = props.depot ? <Icon name='plus square clear' /> : undefined
    return (
        <button
            className={allClasses}
        >
            {icone} {props.children}
        </button>
    );
}

export default ButtonClear;