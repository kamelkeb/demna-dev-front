import React from 'react';
import classes from './Buttuon.module.css'

import Button from 'semantic-ui-react'


const Buttuon = (props) => {
    const icone = props.depot ? <Icon name='plus square outline' /> : undefined
    const aspect = props.depot ? "black" : undefined
    return (
        <Button color={aspect} >{icone}{props.children}</Button>
    )
}


export default Buttuon
