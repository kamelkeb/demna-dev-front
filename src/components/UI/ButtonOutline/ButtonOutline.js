import React from 'react';

import classes from './ButtonOutline.module.css';

import { Icon } from 'semantic-ui-react'

const ButtonOutline = (props) => {
    const allClasses = [classes.ButtonOutline, "button-outline"].join(' ')
    const icone = props.depot ? <Icon name='plus square outline' /> : undefined
    return (
        <button
            className={allClasses}
        >
            {icone} {props.children}
        </button>
    );
}

export default ButtonOutline;