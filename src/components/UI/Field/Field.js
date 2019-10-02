import React from 'react';
import classes from './Field.module.css'

import { Input } from 'semantic-ui-react'

const Field = (props) => {
    // Gestion du caractere obligatoire (ou non) de la saisie du champ
    const labelValue = props.mandatory?{ icon: 'asterisk' }:undefined
    const labelPositionValue = props.mandatory?'right corner':undefined
    
    return (
        <Input
            label={labelValue}
            labelPosition={labelPositionValue}
            size="mini"
            className={props.className}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            onBlur={props.handleOnBlur}
            onFocus={props.handleOnFocus}
        />
    );
}


export default Field
