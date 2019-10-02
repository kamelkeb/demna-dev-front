import React from 'react';
import classes from './Button.module.css'

import {Button, Icon} from 'semantic-ui-react'


const Buttuon = (props) => {
    const icone = props.depot ? <Icon name='plus square outline' /> : undefined
    const aspect = props.depot ? "black" : undefined
    return (
        <Button color={aspect} >{icone}{props.children}</Button>
    )
}


export default Button