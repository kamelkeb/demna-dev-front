import React from 'react';
import classes from './Field.module.css'

import { Input } from 'semantic-ui-react'

const Field = (props) => {
    // Gestion du caractere obligatoire (ou non) de la saisie du champ
    let labelValue = undefined;
    let labelPositionValue = undefined;
    if (props.mandatory) {
        labelValue = { icon: 'asterisk' };
        labelPositionValue = 'right corner';
    }
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
