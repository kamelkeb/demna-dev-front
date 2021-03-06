import React from 'react';
import classes from './Button.module.css'

import { Icon } from 'semantic-ui-react'


const Button = (props) => {
    const allClasses = [classes.Button, "button"].join(' ')
    const icone = props.depot ? <Icon name='plus square outline' /> : undefined
    return (
        <button
            className={allClasses}
        >
            {icone} {props.children}
        </button>
    )
}


export default Button