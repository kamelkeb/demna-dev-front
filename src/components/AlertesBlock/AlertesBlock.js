import React from 'react';

import classes from './AlertesBlock.module.css';

import Label from 'src/components/UI/Label/Label'

import text from 'src/language_picker'


const AlertesBlock = (props) => {

    return (
            <Label value={text.ALERTS_BLOCK_LABEL}/>
            <Carousel items={props.items}/>

            )
}


export default AlertesBlock